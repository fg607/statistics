<?php

namespace App\Http\Controllers;

use App\DayliyIsolateNumber;
use App\BackPeopleInfo;

use Illuminate\Http\Request;

class AutoUpdateController extends Controller
{
    public function updateDayliyIsolate(){

        $peopleInfos = BackPeopleInfo::where('isolate_date','>',date("Y-m-d", strtotime("-1 week")))->get();

        return count($peopleInfos);

    }
}
