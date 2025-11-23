public with sharing class BankAccount{
    private Decimal balance;

    public BankAccount(Decimal initialAmount){
        balance = initialAmount;
    }

    public void deposit(Decimal amount){
        balance += amount;
    }
    
    public Decimal getBalance(){
        return balance;
    }
}