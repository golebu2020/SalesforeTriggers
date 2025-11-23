public with sharing class BasicCrudOps{
    //implementing create operations
    public static void createSingleAccount(String Name, String Phone, String Industry){
        Account acc = new Account();
        acc.Name = Name;
        acc.Phone = Phone;
        acc.Industry = Industry;
        insert acc;
    }

    public static void getAccounts(){
        List<Account> accounts = [SELECT Id, Name , Phone, Industry FROM Account];

        for(Account acc: [SELECT Id, Name , Phone, Industry FROM Account]){
            System.debug('==========================');
            System.debug('Account Name: ' + acc.Name);
        }
    }

    public static void getSingleAccount(String Name){
        Account acc = [SELECT Id, Name, Industry, Phone FROM Account WHERE Name = :Name LIMIT 1];
        System.debug('Account Name: ' + acc.Name);
        System.debug('Account Industry: ' + acc.Industry);
        System.debug('Account Phone: ' + acc.Phone);
    }

    public static void deleteSingleAccount(String Name){
        Account acc = [SELECT Id, Name, Industry, Phone FROM Account WHERE Name = :Name LIMIT 1];
        delete acc;
        System.debug(acc.Name);
        System.debug('Successfully Deleted');
    }

}