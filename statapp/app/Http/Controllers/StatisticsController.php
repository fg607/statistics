<?php

namespace App\Http\Controllers;
use App\BackPeopleInfo;
use App\DayliyIsolateNumber;

use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    public function getAllRooms(){

        $rooms = BackPeopleInfo::select('address')->distinct()->get();

        return count($rooms);
    }

    public function getStatistics(){

         $rooms = BackPeopleInfo::select('address')->distinct()->get();
         $people = BackPeopleInfo::all();
         $qrcodeRooms = BackPeopleInfo::where('qrcode_flag','是')->select('address')->distinct()->get();
         $qrcodePeople = BackPeopleInfo::where('qrcode_flag','是')->get();

         return array('rooms'=>count($rooms),'people'=>count($people),'qrcodeRooms'=>count($qrcodeRooms),'qrcodePeople'=>count($qrcodePeople));




    }
}
