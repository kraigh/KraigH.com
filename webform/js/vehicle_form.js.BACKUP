function call_year()
{
	$("#make_loading").show();	
	var year = $("#year").val();
	
	$('#make').attr('disabled', 'disabled');
	$('#model').attr('disabled', 'disabled');
	$('#trim').attr('disabled', 'disabled');
	$('#detail').html('');
	
	var params = "year=" + year;	
	$.get('make.php', params, function(data)
	{
   		if (data.length>0)
   		{
     		$("#make").html(data).removeAttr('disabled');      		
     		$("#make_loading").hide();     		
     		if(make != 0)
     		{
     			$("#make option[value="+make+"]").attr('selected', 'selected');     			
     			if(make != 'Please Select Make' && make != '')
     				{
     					call_make(make);
     				}
     		}
   		} 
  	});
}

function call_make(make, model)
{
	$("#model_loading").show();	
	var year = $("#year").val();
	if(make == undefined){
		var make = $("#make").val();			
	}	
	if(model == undefined){
		var model = $("#model").val();				
	}	
	
	$('#model').attr('disabled', 'disabled');
	$('#trim').attr('disabled', 'disabled');
	$('#detail').html('');
	
	var params = "year=" + year + "&make=" + make;	
	$.get('model.php', params, function(data)
	{
   		if (data.length>0)
   		{ 
     		$("#model").html(data).removeAttr('disabled');      		
     		$("#model_loading").hide();     		
     		if(model != 0)
     		{
     			$("#model option[value="+model+"]").attr('selected', 'selected');     			
     			if(model != 'Please Select Model' && model != '')
     				{     				
     					call_model(make, model);
     				}
     		}     		
     	}
  });	
}

function call_model(make, model)
{
	$("#trim_loading").show();
	var year = $("#year").val();	
	if(make == undefined){
		var make = $("#make").val();			
	}	
	if(model == undefined){
		var model = $("#model").val();				
	}	
	if(trim == undefined){
		var trim = $("#trim").val();				
	}		
		
	$('#trim').attr('disabled', 'disabled');
	$('#detail').html('');
	
	var params = "year=" + year + "&make=" + make + "&model=" + model;
	$.get('trim.php', params, function(data)
	{
   		if (data.length>0)
   		{ 
     		$("#trim").html(data).removeAttr('disabled');      		
     		$("#trim_loading").hide();     		
     		if(trim != 0)
     		{
     			$("#trim option[value="+trim+"]").attr('selected', 'selected');     			
     			if(trim != 'Please Select Trim' && trim != '')
     				{     				
     					call_trim(make, model, trim);
     				}
     		}     		
     	}
  });	
}

function call_trim(make, model, trim)
{
	
	$("#detail_loading").show();
	var year = $("#year").val();	
	if(make == undefined){
		var make = $("#make").val();			
	}	
	if(model == undefined){
		var model = $("#model").val();				
	}	
	if(trim == undefined){
		var trim = $("#trim").val();				
	}		
		
	$('#detail').html('');
	
	$("#detail_loading").hide();   
	
	var detail_content = '';
	detail_content = detail_content + '&nbsp;' + make;
	detail_content = detail_content + '&nbsp;' + model;
	detail_content = detail_content + '&nbsp;' + trim;
	$("#detail").html(detail_content);
}

