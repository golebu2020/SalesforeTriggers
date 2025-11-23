global class ManagerUser {
    
    global void disableUsers(List<String> listOfUsers){
        List<User> usersToDisable = [
            SELECT Id, Name, IsActive 
            FROM User 
            WHERE Name IN :listOfUsers
            AND IsActive = true  
        ];
        
        System.debug(usersToDisable);
        
        for (User userToDisable : usersToDisable){
        	userToDisable.IsActive = false;
        }
        
        if (!usersToDisable.isEmpty()){
            try{
                update usersToDisable;
                System.debug('Successfully disabled: ' + usersToDisable);
            }catch(Exception e){
                System.debug('Error disableing users: ' + e.getMessage());
            }
        }else{
            System.debug('No active matching users found.');
        }
    } 
    
    global void createUser(Map<String, String> userInfo){
        
        try{
            Profile sysAdminProfile = [
                SELECT Id, UserLicenseId, Name
                FROM Profile
                WHERE Name = :userInfo.get('profile')
                LIMIT 1
            ];
            
            UserRole sysAdminRole = [
                SELECT Id
                FROM UserRole
                WHERE Name = :userInfo.get('role')
                LIMIT 1
            ];
            
            User newUser = new User(
                FirstName = userInfo.get('firstName'),
                LastName = userInfo.get('lastName'),
                Alias = userInfo.get('alias'),
                Email = userInfo.get('email'),
                Username = userInfo.get('username'), 
                ProfileId = sysAdminProfile.Id,
                UserRoleId = sysAdminRole.Id,
                TimeZoneSidKey = 'America/Los_Angeles',
                LocaleSidKey = 'en_US',
                EmailEncodingKey = 'UTF-8',
                LanguageLocaleKey = 'en_US'
            ); 
            
            insert newUser;
            System.resetPassword(newUser.Id, true); 
        	System.debug('User created with SysAdmin profile/role: ' + newUser.Id);
            
        }catch(Exception e){
             System.debug('Error creating AMS Developer user: ' + e.getMessage());
        }
    }
    
    global void removeInvalidSuffix(){
        List<User> usersToFixEmails = [
            SELECT Id, Email, Profile.Name
            FROM User  
            WHERE Email LIKE '%.invalid' AND Profile.Name = 'System Administrator'
            AND Id != :UserInfo.getUserId()
    	];
        
    	for (User u : usersToFixEmails) {
            if (u.Email != null && u.Email.endsWith('.invalid')) {
                u.Email = u.Email.replace('.invalid', '');
            }
    	}
        
        if (!usersToFixEmails.isEmpty()) {
            update usersToFixEmails;
            System.debug('Updated emails for ' + usersToFixEmails.size() + ' users.');
        }
    }
}