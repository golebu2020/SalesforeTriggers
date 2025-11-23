global class CreditCardPayment implements IPayment{
    public void processPayment(Decimal amount){
        System.debug('Processing credit card payment: ' + amount);
    }
}