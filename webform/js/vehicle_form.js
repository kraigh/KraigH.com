function call_year(id) {
  $("#"+id+" #make_loading").show();
  var year = $("#"+id+" #year").val();

  $('#'+id+' #make').attr('disabled', 'disabled');
  $('#'+id+' #model').attr('disabled', 'disabled');
  $('#'+id+' #trim').attr('disabled', 'disabled');
  $('#'+id+' #detail').html('');

  var params = "year=" + year;
  $.get('webform/make.php', params, function(data) {
      if (data.length>0) {
        $("#"+id+" #make").html(data).removeAttr('disabled');
        $("#"+id+" #make_loading").hide();
        if(make != 0) {
          $("#"+id+" #make option[value="+make+"]").attr('selected', 'selected');
          if(make != 'Please Select Make' && make != '') {
            call_make(id, make);
          }
        }
      }
    });
}

function call_make(id, make) {
  $("#"+id+" #model_loading").show();
  var year = $("#"+id+" #year").val();
  if(make == undefined){
    var make = $("#"+id+" #make").val();
  }
  if(model == undefined){
    var model = $("#"+id+" #model").val();
  }

  $('#'+id+' #model').attr('disabled', 'disabled');
  $('#'+id+' #trim').attr('disabled', 'disabled');
  $('#'+id+' #detail').html('');

  var params = "year=" + year + "&make=" + make;
  $.get('webform/model.php', params, function(data)
  {
      if (data.length>0)
      {
        $("#"+id+" #model").html(data).removeAttr('disabled');
        $("#"+id+" #model_loading").hide();
        if(model != 0)
        {
          $("#"+id+" #model option[value="+model+"]").attr('selected', 'selected');
          if(model != 'Please Select Model' && model != '')
            {
              call_model(id, make, model);
            }
        }
      }
  });
}

function call_model(id, make, model){
  $("#"+id+" #trim_loading").show();
  var year = $("#"+id+" #year").val();
  if(make == undefined){
    var make = $("#"+id+" #make").val();
  }
  if(model == undefined){
    var model = $("#"+id+" #model").val();
  }
  if(trim == undefined){
    var trim = $("#"+id+" #trim").val();
  }

  $('#'+id+' #trim').attr('disabled', 'disabled');
  $('#'+id+' #detail').html('');

  var params = "year=" + year + "&make=" + make + "&model=" + model;
  $.get('webform/trim.php', params, function(data)
  {
      if (data.length>0)
      {
        $("#"+id+" #trim").html(data).removeAttr('disabled');
        $("#"+id+" #trim_loading").hide();
        if(trim != 0)
        {
          $("#"+id+" #trim option[value="+trim+"]").attr('selected', 'selected');
          if(trim != 'Please Select Trim' && trim != '')
            {
              call_trim(id, make, model, trim);
            }
        }
      }
  });
}

function call_trim(id, make, model, trim){

  $("#"+id+" #detail_loading").show();
  var year = $("#"+id+" #year").val();
  if(make == undefined){
    var make = $("#"+id+" #make").val();
  }
  if(model == undefined){
    var model = $("#"+id+" #model").val();
  }
  if(trim == undefined){
    var trim = $("#"+id+" #trim").val();
  }

  $('#'+id+' #detail').html('');

  $("#"+id+" #detail_loading").hide();

  var detail_content = '';
  detail_content = detail_content + '&nbsp;' + make;
  detail_content = detail_content + '&nbsp;' + model;
  detail_content = detail_content + '&nbsp;' + trim;
  $("#"+id+" #detail").html(detail_content);
}

