public class OuterClass {
    public static String company = 'Salesforce';

    public class InnerClass {
        public void showInfo(){
            System.debug('Welcome to ' + OuterClass.company);
        }
    }
}