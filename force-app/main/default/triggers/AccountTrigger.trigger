trigger AccountTrigger on Account (before insert, after insert) {

    List<Contact> myNewCoontact = new List<Contact>();

    if (Trigger.isBefore && Trigger.isInsert){
        for (Account acc : Trigger.new) {
            acc.Name = acc.Name.toUpperCase();
        }
    }

    if (Trigger.isAfter && Trigger.isInsert){
        for (Account acc : Trigger.new){
            Contact con = new Contact();
            con.FirstName = 'Chika';
            con.LastName = 'Olebu';
            con.AccountId = acc.Id;
            myNewCoontact.add(con);
        }

        if (myNewCoontact.size() > 0){
            insert myNewCoontact;
        }
    }
}