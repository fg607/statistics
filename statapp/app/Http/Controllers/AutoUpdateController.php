<?php

namespace App\Http\Controllers;

use App\DayliyIsolateNumber;
use App\BackPeopleInfo;

use Illuminate\Http\Request;

class AutoUpdateController extends Controller
{
    public function updateDayliyIsolate(){

        date_default_timezone_set("PRC");

        $peopleInfos = BackPeopleInfo::where('isolate_date','<=',date("Y-m-d", strtotime("-15 day")))->get();

        foreach($peopleInfos as $peopleInfo){

            if($peopleInfo->isolate_flag == '否'){

                $peopleInfo->isolate_flag = '是';
                $peopleInfo->save();
            }
        }

        $isolate = BackPeopleInfo::where('isolate_flag','否')->count();

        $dayliyIsolate = new DayliyIsolateNumber;

        $dayliyIsolate->date = date("Y-m-d");
        $dayliyIsolate->numbers = $isolate;
        $dayliyIsolate->update_time = date("Y-m-d H:i");

        $dayliyIsolate->save();

       // return count($isolate);

    }
}
