trigger ContactTrigger on Contact (before insert, after insert, before update, after update) 
{
    // if (Trigger.new != null){
    //     System.debug('This ran yea!!!');
    //     kewlMethod();
    // }

    if (Trigger.isBefore && Trigger.isInsert){
        System.debug('This is called before insert operation');
    }

    if (Trigger.isAfter && Trigger.isUpdate){
        System.debug('This is called after insert operation');
        // kewlMethod();
    }

    if (Trigger.isBefore && Trigger.isUpdate){
        kewlMethod();

    }

    public static void kewlMethod(){
        for (Contact cont: Trigger.new){
            Contact oldContact = Trigger.oldMap.get(cont.id);
            if (cont.Birthdate != oldContact.Birthdate){
                // cont.LastName = 'Taco Bell Boi';
                cont.addError('u can\'t change the birthday, sorry bro');
            }
        }
    }

}