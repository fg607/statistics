<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\DayliyIsolateNumber;

class BackPeopleInfo extends Model
{
    //
    public $timestamps = false;

    public static function boot()
    	{
        	parent::boot();

        	static::created(function ($model) {

        	    date_default_timezone_set("PRC");

        	    if($model->isolate_flag == '否'){

        	        $dayliyIsolate = DayliyIsolateNumber::where('date',date("Y-m-d"))->first();

        	        $dayliyIsolate->numbers = $dayliyIsolate->numbers + 1;

        	         $dayliyIsolate->update_time = date("Y-m-d H:i:s");

        	        $dayliyIsolate->save();

        	    }

        	});
        }


}
