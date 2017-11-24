let myModule = {
    data:'module_data',
    foo(){
        console.log('foo:'+this.data);
    },
    bar(){
      console.log('bar:'+this.data);
    }
}
//作用是减少暴露的全局变量


