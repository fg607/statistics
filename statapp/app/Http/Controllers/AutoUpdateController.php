<?php

namespace App\Http\Controllers;

use App\DayliyIsolateNumber;
use App\BackPeopleInfo;

use Illuminate\Http\Request;

class AutoUpdateController extends Controller
{
    public function updateDayliyIsolate(){

        //$peopleInfos = BackPeopleInfo::where('isolate_date','<=',date("Y-m-d", strtotime("-2 week")))->get();

        /*foreach($peopleInfos as $peopleInfo){

            if($peopleInfo->isolate_flag == '否'){

                $peoleInfo->isolate_flag = '是';
                $peopleInfo->save();
            }
        }

        $isolate = BackPeopleInfo::where('isolate_flag','否')->get();*/

       // return count($isolate);
        return date("Y-m-d", strtotime("-2 week"));

    }
}
