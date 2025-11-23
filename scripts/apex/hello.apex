System.debug('Thanks for your understanding...');

Map<String, Object> myMap = new Map<String, Object>{
    'FirstName' => 'Chinedu',
    'LastName' => 'Olebu',
    'Age' => 35,
    'Gender' => 'Male'
};

System.debug('Person Information: ' + myMap);

for (String key : myMap.keySet()){
    System.debug(key);
}