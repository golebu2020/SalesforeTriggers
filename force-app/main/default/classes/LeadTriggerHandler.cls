public with sharing class LeadTriggerHandler {
    public void onBeforeInsert(List<Lead> newLeads){
        for (Lead ld : newLeads){
            ld.Email= 'cgolebu@gmail.com';
        }

    }

    public void onAfterInsert(List<Lead> newLeads){
        // Add a Task to this lead
        List<Task> tasksToCreate = new List<Task>();
        
        for (Lead ld : newLeads) {
            tasksToCreate.add(new Task(Subject = 'My new Task', WhatId = ld.Id, Status = 'Not Started'));          
        }

        insert tasksToCreate;
    }

}