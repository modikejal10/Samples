angular.module("Samples").controller('dynamicFormController',["$scope",function($scope){
	$scope.tree=[{
		classDataSource:{
			data:[{name:"Computer",internalName:"Computer"},
			      {name:"HBA",internalName:"HBA"},
			      {name:"NIC",internalName:"NIC"}]
		},
		attributes:[],
		childObjects:[]
	}];
	
	$scope.validatorOptions={
			validateOnBlur:true
	}
	
	$scope.onAddItem=function(data,parent){
		data.childObjects.push({
				classDataSource:{
					data:[{name:"Computer",internalName:"Computer"},
					      {name:"HBA",internalName:"HBA"},
					      {name:"NIC",internalName:"NIC"}]
				},
				attributes:[],
				childObjects:[]
	})
	}
	
	$scope.onAddAttribute=function(data,parent){
		data.attributes.push({
			attributeDataSource:{
				data:[{name:"Computer",internalName:"Computer"},
				      {name:"HBA",internalName:"HBA"},
				      {name:"NIC",internalName:"NIC"}]
			},
			conditionDataSource:{
				data:[{condition:"Computer",value:"Computer"},
				      {condition:"HBA",value:"HBA"},
				      {condition:"NIC",value:"NIC"}]
			}
		
		})
	}
	
	$scope.numericBoxOptions={
			format:"n6",
			decimals:"6"
	}
	
	$scope.onDeleteChild=function(data,parent){
		if(parent){
			var index=parent.childObjects.indexOf(data);
			if(index!=-1){
				parent.childObjects.splice(index,1);
			}
		}
	}
	
	$scope.onDeleteAttribute=function(data,index){
			if(index!=-1){
				data.attributes.splice(index,1);
			}
			$scope.advancedSearchForm.$setDirty(true);
	}
	
	$scope.$watch('advancedSearchForm.$valid',function(validity){
		if(validity){
			$scope.advancedSearchForm_invalid=false;
		}
	})
	
	$scope.onShowDeleteBtn=function(parent){
		if(parent){
			return true;
		}else{
			return false;
		}
	}
	
	$scope.onFormReset=function(){
		var obj=$scope.tree;
		for(var key in obj){
			if(obj.hasOwnProperty(key)){
				obj[key].attributes.length=0;
				obj[key].childObjects.length=0;
				obj[key].objectData={internalName:""};
			}
		}
	}
	
	$scope.onShowInput=function(attribute){
		if(attribute.attribute&&attribute.conditionData){
			return true;
		}else{
			return false;
		}
	}
}])