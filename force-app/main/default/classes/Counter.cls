public with sharing class Counter{
    public static Integer totalCount  = 0;


    public Counter(){
        totalCount++;
    }

    public static Integer getTotalObjectCreated(){
        return totalCount;
    }
}