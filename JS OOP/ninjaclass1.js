function Ninja(name) {
    let health = 100;
    let speed = 3;
    let strength = 3;
    this.name = name;

    //health set as private variable
    function updateHealth (healthy){
        health += healthy
    }
    this.showHealth = function() {
        return health;
    }
    this.health = function(healthy){
        updateHealth(healthy);
        return this;
    }
    this.sayName = function() {
        console.log('My name is ' + this.name);
    }

    this.showStats = function(){
        console.log(this);
    }
}
const AC = new Ninja('AC');
AC.sayName();
AC.showHealth();