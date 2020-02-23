<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\BackPeopleInfo;

class PeopleInfoController extends Controller
{


    public function getHubei(){
         $hubeiPeople = BackPeopleInfo::where('isolate_level','like','%湖北%')->count();
         $wuhanPeople = BackPeopleInfo::where('isolate_level','like','%湖北%')->count();

         return $hubeiPeople+$wuhanPeople;
    }

    public function getHotcity(){
         $hotCityPeople = BackPeopleInfo::where('isolate_level','like','两省四市')->count();

         return $hotCityPeople;
    }


    public function getOthercity(){
          $otherCityPeople = BackPeopleInfo::where('isolate_level','like','普通')->count();

          return $otherCityPeople;
    }

    public function getDistrict(){

           $district = array('hubei'=>$this->getHubei(),'hotCity'=>$this->getHotcity(),'otherCity'=>$this->getOthercity());

           return district;


    }

    public function getIsolate(){

        $isolate = BackPeopleInfo::where('isolate_flag','是')->count();

        return $isolate;

    }

    public function getNotIsolate(){

        $notIsolate = BackPeopleInfo::where('isolate_flag','否')->count();

        return $notIsolate;

    }



}
