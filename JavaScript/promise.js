function locationfinder(){
    loc="skcet"
    time=2000
    return new Promise((locFound,locNotFound) =>{
    setTimeout(() => {
        if(isLocation(loc,time)){
            locFound("Location Found")
        }
        else{
            locNotFound("Location Not Found")
        }
    }, time);
})
}
isLocation = (loc,time) =>{
    isloc="skct";
    t=20000;
    if(loc===isloc && t<=time){
        return true;
    }
    else{
        return false;
    }
};
locationfinder()
.then((val) =>{
    console.log(val)
})
.catch((val) =>{
    console.log(val)
})