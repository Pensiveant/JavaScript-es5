function hello(thing){
    console.log(this+' says hello'+thing)
}

hello.call("pensiveant","world")
hello.call(window,"world")