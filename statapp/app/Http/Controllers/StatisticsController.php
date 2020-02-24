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

         $hotRooms = BackPeopleInfo::where('isolate_level','<>','普通')->select('address')->distinct()->count();
         $hotPeople = BackPeopleInfo::where('isolate_level','<>','普通')->count();
         $hotIsolateRooms = BackPeopleInfo::where([['isolate_level','<>','普通'],['isolate_flag','否']])->select('address')->distinct()->count();
         $hotIsolatePeople = BackPeopleInfo::where([['isolate_level','<>','普通'],['isolate_flag','否']])->count();
         $hubeiIsolateRooms = BackPeopleInfo::where([['isolate_level','like','%湖北%'],['isolate_flag','否']])->select('address')->distinct()->count();
         $hubeiIsolatePeople = BackPeopleInfo::where([['isolate_level','like','%湖北%'],['isolate_flag','否']])->count();
         $otherRooms = BackPeopleInfo::where('isolate_level','普通')->select('address')->distinct()->count();
         $otherPeople = BackPeopleInfo::where('isolate_level','普通')->count();
         $otherIsolateRooms = BackPeopleInfo::where([['isolate_level','普通'],['isolate_flag','否']])->select('address')->distinct()->count();
         $otherIsolatePeople = BackPeopleInfo::where([['isolate_level','普通'],['isolate_flag','否']])->count();
         $freeOtherRooms = $otherRooms - $otherIsolateRooms;
         $freeOtherPeople = $otherPeople - $otherIsolatePeople;
         $qrcodeRooms = BackPeopleInfo::where('qrcode_flag','是')->select('address')->distinct()->count();
         $qrcodePeople = BackPeopleInfo::where('qrcode_flag','是')->count();
         $qrcodeIsolateRooms = BackPeopleInfo::where([['qrcode_flag','是'],['isolate_flag','否']])->select('address')->distinct()->count();
         $qrcodeIsolatePeople = BackPeopleInfo::where([['qrcode_flag','是'],['isolate_flag','否']])->count();
         $qrcodeFreeRooms = $qrcodeRooms - $qrcodeIsolateRooms;
         $qrcodeFreePeople = $qrcodePeople - $qrcodeIsolatePeople;

         return array('hotRooms'=>$hotRooms,'hotPeople'=>$hotPeople,'hotIsolateRooms'=>$hotIsolateRooms,'hotIsolatePeople'=>$hotIsolatePeople,
                 'hubeiIsolateRooms'=>$hubeiIsolateRooms,'hubeiIsolatePeople'=>$hubeiIsolatePeople,'otherRooms'=>$otherRooms,
                  'otherPeople'=>otherPeople,'otherIsolateRooms'=>$otherIsolateRooms,'otherIsolatePeople'=>$otherIsolatePeople,
                  'freeOtherRooms'=>$freeOtherRooms,'freeOtherPeople'=>$freeOtherPeople,'qrcodeRooms'=>$qrcodeRooms,'qrcodePeople'=>$qrcodePeople,
                  'qrcodeIsolateRooms'=>$qrcodeIsolateRooms,'qrcodeIsolatePeople'=>$qrcodeIsolatePeople,'qrcodeFreeRooms'=>$qrcodeFreeRooms,
                  'qrcodeFreePeople'=>$qrcodeFreePeople);




    }
}
