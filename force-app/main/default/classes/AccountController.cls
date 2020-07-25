public with sharing class AccountController {

    //Demo 2
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id,Name FROM Account LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContact(String accountId){
        return [SELECT Id,Name FROM Contact WHERE AccountId = :accountId]; 
    }

    //demo 26
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountTypes(){
        return [SELECT Id, Name, Type FROM Account ];
    }
    //demo 26
    @AuraEnabled
    public static void updateAccountType(){
        List<Account> accountList = new List<Account>(); 
        for(Account accUpdate : [SELECT Id, Name, Type FROM Account WHERE  Type = null]){
            accUpdate.Type = 'Customer - Direct';
            accountList.add(accUpdate);
        }
        update accountList;
    }

    //Demo  2
    @AuraEnabled
    public static List<Account> findAll() {
        return [SELECT id, name, website
            FROM Account
             LIMIT 10];
    } 

    @AuraEnabled (cacheable = true)
    public static List<Account> searchAccount(String accName) {
        string strAccName = '%'+ accName + '%';
        return [Select Id, Name, Type, Industry, Phone, Website from Account WHERE Name LIKE: strAccName ];
    }

    
    @AuraEnabled(Cacheable = true)
    public static List<Account> getAccount(){
        return [Select Id, Name, Type, Industry, Phone, Website FROM Account ORDER BY Name limit 5];
    }

     @AuraEnabled(Cacheable = true)
    public static List<Account> getAllAccount(){
        return [Select Id, Name, Type, Industry, Phone, Website FROM Account ORDER BY Name];
    }
    
    @AuraEnabled
    public static void deleteAccount(list<Id> lstAccountIds){
        try {
            list<Account> lstAccountToDelete = new list<Account>();
            System.debug('lstAccountIds ====> '+lstAccountIds);
            for(Id idAcc : lstAccountIds) {
                lstAccountToDelete.add(new Account(Id = idAcc));
            }
            if(!lstAccountToDelete.isEmpty()) {
                delete lstAccountToDelete;
            }
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
    
    /*
    Method: retriveAccount
    Para: strDate
    here passing the date format 2014-07-07 and fetching all the account records based on the last modified date
    */
    public static list<Account> retriveAccount(String strDate) {
         list<Account> lstAccount;
         if(strDate != '') { 
             strDate = strDate +' 00:00:00';
             system.debug('strDate:::::'+strDate);
             
             DateTime dt = DateTime.valueOf(strDate);
             
             lstAccount = [Select Id, Name from Account where LastModifiedDate >=: dt];
             system.debug('lstAccount::::' + lstAccount);
         }
         return lstAccount;  
    }
    
    /*
    Method: updateAccount
    Para: AccountId, Fname
    here passing the Account Id and Name values and its updated to respective account
    */
    public static void updateAccount(Id AccountId, String Fname) {
         
         try {
             if(AccountId != null && Fname !='') {
                 list<Account>  lstAccount = [Select Id, Name from Account where Id =: AccountId];
                 lstAccount[0].name = Fname;
                 update lstAccount[0];
             }
         } catch (DMLException ex) {
            system.debug('Error:' + ex);        
         }
    }

}