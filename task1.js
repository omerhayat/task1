/**
 * Base class for a StringSet implementation
 */
class StringSetBase {
  
    constructor() {
        if (new.target === StringSetBase) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

    /**
     * Adds a new element to the set
     * @param {String} element
     */
    add(element) { throw new Error('Unimplemented'); }

    /**
     * Removes and element from the set
     * @param {String} element
     */
    remove(element) { throw new Error('Unimplemented'); }

    /**
     * Decides if element is part of the set
     * @param {String} element
     * @return {Boolean}
     */
    contains(element) { throw new Error('Unimplemented'); }
}

class StringSetImpl extends StringSetBase {
  
  	
  
    constructor() {
      super();
      this.elements = new Array();
      console.log("inside constructor");
    }

    /**
     * Adds a new element to the set
     * @param {String} element
     */
    add(element) {
      if(this.elements.indexOf(element)> -1){ //to make sure that no element is repeated as per requirement
        return;
      }
      this.elements.push(element);
      console.log("My elements are ",this.elements);
    }

    /**
     * Removes an element from the set
     * @param {String} element
     */
    remove(element) { 
      var index = this.elements.indexOf(element);
      if(index > -1){
      	this.elements.splice(index,1);
        console.log("Element deleted ",element);
      }
    }

    /**
     * Decides if element is part of the set
     * @param {String} element
     * @return {Boolean}
     */
    contains(element) {
      if(this.elements.indexOf(element)> -1){
        return true;
      }else{
      	return false;
      }
    }
}
// for testing purposes
 var newClass = new StringSetImpl();
	newClass.add("hello");
	newClass.add("hello");
	newClass.add("hello");
	console.log(newClass.elements);
	newClass.remove("hello");
	console.log(newClass.elements);
	console.log("Contains",newClass.contains("hello 1"));
