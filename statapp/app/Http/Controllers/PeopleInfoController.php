<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\BackPeopleInfo;
use App\DayliyIsolateNumber;

class PeopleInfoController extends Controller
{


    public function getHubei(){
         $hubeiPeople = BackPeopleInfo::where('isolate_level','like','%湖北%')->count();

         return $hubeiPeople;
    }

    public function getHotcity(){
         $hotCityPeople = BackPeopleInfo::where('isolate_level','like','%两省四市%')->count();

         return $hotCityPeople;
    }


    public function getOthercity(){
          $otherCityPeople = BackPeopleInfo::where('isolate_level','like','%普通%')->count();

          return $otherCityPeople;
    }

    public function getDistrict(){

           $district = array('hubei'=>$this->getHubei(),'hotCity'=>$this->getHotcity(),'otherCity'=>$this->getOthercity());

           return $district;


    }

    public function getIsolate(){

        $hubeiIsolate = BackPeopleInfo::where([['isolate_flag','否'],['isolate_level','like','%湖北%']])->count();
        $hotCityIsolate = BackPeopleInfo::where([['isolate_flag','否'],['isolate_level','like','%两省四市%']])->count();
        $otherIsolate = BackPeopleInfo::where([['isolate_flag','否'],['isolate_level','like','%普通%']])->count();
        $notIsolate = BackPeopleInfo::where('isolate_flag','是')->count();

        $isolateArray = array('hubeiIsolate'=>$hubeiIsolate,'hotCityIsolate'=>$hotCityIsolate,'otherIsolate'=>$otherIsolate,'notIsolate'=>$notIsolate);

        return $isolateArray;
    }

    public function getDayliyIsolate(){

        $date = DayliyIsolateNumber::pluck('date');
        $number = DayliyIsolateNumber::pluck('numbers');


        return array('dayliyDate'=>$date,'dayliyIsolateNum'=>$number);

    }

    public function function getNewIsolate(){

        $newIsolate = BackPeopleInfo::where([['isolate_date',date("Y-m-d")],['isolate_flag','否']])->count();

        $newFree = BackPeopleInfo::where('isolate_date',date("Y-m-d", strtotime("-2 week")))->count();

        return array('newIsolate'=>$newIsolate,'newFree'=>$newFree);

    }

    public function getPeopleInfos(){

          date_default_timezone_set("PRC");

          $peopleInfos = array_merge(array('date'=>date("Y-m-d")),$this->getDistrict(),$this->getIsolate(),$this->getDayliyIsolate(),$this->getNewIsolate());

          return $peopleInfos;


    }



}
