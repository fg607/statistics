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

         $hotRooms = BackPeopleInfo::where('isolate_level','<>','普通')->select('address')->distinct()->get();
         $hotRooms = count($hotRooms);
         $hotPeople = BackPeopleInfo::where('isolate_level','<>','普通')->count();
         $hotIsolateRooms = BackPeopleInfo::where([['isolate_level','<>','普通'],['isolate_flag','否']])->select('address')->distinct()->get();
         $hotIsolateRooms = count($hotIsolateRooms);
         $hotIsolatePeople = BackPeopleInfo::where([['isolate_level','<>','普通'],['isolate_flag','否']])->count();
         $hubeiIsolateRooms = BackPeopleInfo::where([['isolate_level','like','%湖北%'],['isolate_flag','否']])->select('address')->distinct()->get();
         $hubeiIsolateRooms = count($hubeiIsolateRooms);
         $hubeiIsolatePeople = BackPeopleInfo::where([['isolate_level','like','%湖北%'],['isolate_flag','否']])->count();
         $otherRooms = BackPeopleInfo::where('isolate_level','普通')->select('address')->distinct()->get();
         $otherRooms = count($otherRooms);
         $otherPeople = BackPeopleInfo::where('isolate_level','普通')->count();
         $otherIsolateRooms = BackPeopleInfo::where([['isolate_level','普通'],['isolate_flag','否']])->select('address')->distinct()->get();
         $otherIsolateRooms = count($otherIsolateRooms);
         $otherIsolatePeople = BackPeopleInfo::where([['isolate_level','普通'],['isolate_flag','否']])->count();
         $freeOtherRooms = $otherRooms - $otherIsolateRooms;
         $freeOtherPeople = $otherPeople - $otherIsolatePeople;
         $qrcodeRooms = BackPeopleInfo::where('qrcode_flag','是')->select('address')->distinct()->get();
         $qrcodeRooms = count($qrcodeRooms);
         $qrcodePeople = BackPeopleInfo::where('qrcode_flag','是')->count();
         $qrcodeIsolateRooms = BackPeopleInfo::where([['qrcode_flag','是'],['isolate_flag','否']])->select('address')->distinct()->get();
         $qrcodeIsolateRooms = count($qrcodeIsolateRooms);
         $qrcodeIsolatePeople = BackPeopleInfo::where([['qrcode_flag','是'],['isolate_flag','否']])->count();
         $qrcodeFreeRooms = $qrcodeRooms - $qrcodeIsolateRooms;
         $qrcodeFreePeople = $qrcodePeople - $qrcodeIsolatePeople;

         return array('hotRooms'=>$hotRooms,'hotPeople'=>$hotPeople,'hotIsolateRooms'=>$hotIsolateRooms,'hotIsolatePeople'=>$hotIsolatePeople,
                 'hubeiIsolateRooms'=>$hubeiIsolateRooms,'hubeiIsolatePeople'=>$hubeiIsolatePeople,'otherRooms'=>$otherRooms,
                  'otherPeople'=>$otherPeople,'otherIsolateRooms'=>$otherIsolateRooms,'otherIsolatePeople'=>$otherIsolatePeople,
                  'freeOtherRooms'=>$freeOtherRooms,'freeOtherPeople'=>$freeOtherPeople,'qrcodeRooms'=>$qrcodeRooms,'qrcodePeople'=>$qrcodePeople,
                  'qrcodeIsolateRooms'=>$qrcodeIsolateRooms,'qrcodeIsolatePeople'=>$qrcodeIsolatePeople,'qrcodeFreeRooms'=>$qrcodeFreeRooms,
                  'qrcodeFreePeople'=>$qrcodeFreePeople);
    }
}
