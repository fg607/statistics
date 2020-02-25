<?php

namespace App\Admin\Controllers;

use App\BackPeopleInfo;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class BackPeopleController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '"四返"人员信息';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        date_default_timezone_set("PRC");

        $grid = new Grid(new BackPeopleInfo());

        $grid->column('id', __('序号'));
        $grid->column('name', __('姓名'));
        $grid->column('id_num', __('身份证号码'));
        $grid->column('phone', __('手机号码'));
        $grid->column('address', __('楼栋房号'));
        $grid->column('originatin', __('始发地'));
        $grid->column('back_date', __('返回日期'));
        $grid->column('isolate_date', __('隔离日期'));
        $grid->column('isolate_flag', __('解除隔离'));
        $grid->column('isolate_level', __('隔离等级'));
        $grid->column('qrcode_flag', __('网格化管理'));
        $grid->column('vehicle_info', __('交通工具'));
        $grid->column('remarks', __('备注'));

        $grid->filter(function($filter){
            $filter->disableIdFilter();
            $filter->scope('qrcode', '今日扫码')->where([['qrcode_flag', '是'],['isolate_date',date("Y-m-d")]]);
            $filter->scope('newfree', '今日解除')->where('isolate_date', date("Y-m-d", strtotime("-2 week")));



        });

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(BackPeopleInfo::findOrFail($id));

        $show->field('id', __('序号'));
        $show->field('name', __('姓名'));
        $show->field('id_num', __('身份证号码'));
        $show->field('phone', __('手机号码'));
        $show->field('address', __('楼栋房号'));
        $show->field('originatin', __('始发地'));
        $show->field('back_date', __('返回时间'));
        $show->field('isolate_date', __('隔离日期'));
        $show->field('isolate_flag', __('解除隔离'));
        $show->field('isolate_level', __('隔离等级'));
        $show->field('qrcode_flag', __('网格化管理'));
        $show->field('vehicle_info', __('交通工具'));
        $show->field('remarks', __('备注'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new BackPeopleInfo());

        $form->text('name', __('姓名'));
        $form->text('id_num', __('身份证号码'));
        $form->mobile('phone', __('手机号码'));
        $form->text('address', __('楼栋房号'));
        $form->text('originatin', __('始发地'));
        $form->date('back_date', __('返回日期'))->default(date('Y-m-d'));
        $form->date('isolate_date', __('隔离日期'))->default(date('Y-m-d'));
        $form->text('isolate_flag', __('解除隔离'));
        $form->text('isolate_level', __('隔离等级'));
        $form->text('qrcode_flag', __('网格化管理'));
        $form->text('vehicle_info', __('交通工具'));
        $form->text('remarks', __('备注'));

        return $form;
    }
}
