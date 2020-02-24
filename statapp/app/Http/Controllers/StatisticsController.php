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
}
