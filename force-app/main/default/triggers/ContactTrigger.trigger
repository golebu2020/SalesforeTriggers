trigger ContactTrigger on Contact (before insert, after insert) 
{
    // if (Trigger.new != null){
    //     System.debug('This ran yea!!!');
    //     kewlMethod();
    // }

    if (Trigger.isBefore && Trigger.isInsert){
        System.debug('This is called before insert operation');
    }

    if (Trigger.isAfter && Trigger.isInsert){
        System.debug('This is called after insert operation');
        kewlMethod();
    }

    public static void kewlMethod(){
        for (Contact cont : Trigger.new) {
            System.debug('This is the contact that was added: ' + cont);
            
        }
    }

}