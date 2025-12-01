trigger LeadTrigger on Lead (before insert) {
    LeadTriggerHandler handler = new LeadTriggerHandler();

    if (Trigger.isBefore && Trigger.isInsert){
        handler.onBeforeInsert(Trigger.new);
    }

    if (Trigger.isAfter && Trigger.isInsert){
        handler.onAfterInsert(Trigger.new);
    }
}