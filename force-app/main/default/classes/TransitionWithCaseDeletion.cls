public class TransitionWithCaseDeletion implements Database.Batchable<sObject> {

    public Integer numberOfRecordsProcessed = 0;

    public Database.QueryLocator start(Database.BatchableContext bc) {
       return Database.getQueryLocator('SELECT Id, Name FROM Account');
    }

    public void execute(Database.BatchableContext bc, List<sObject> scope) {
       numberOfRecordsProcessed ++;
       delete scope;
    }

    public void finish(Database.BatchableContext bc) {
        System.debug(numberOfRecordsProcessed + ' Records have been deleted for the Account Object');
    }

}