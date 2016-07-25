angular.module("Samples")
.controller('draganddropController',["$scope",function($scope){
	$("#splitter").kendoSplitter({
		panes:[
		       {collapsible:true, size:"20%"},
		       {collapsible:false}
		     ]
	});
	
	var diagram=$("#diagram").kendoDiagram({
		dataSource:{
			data:[{
				"name":"Computer",
				"items":[{
					"name":"NIC",
					"items":[{
						"name":"Port",
						"items":[]
					},{
						"name":"Address",
						"items":[]
					}]
				}]
			}],
			schema:{
				model:{
					children:"items",
					fields:{
						name:{type:"string"}
					}
				}
			}
		},
		shapeDefaults:{
			visual:visualTemplate
		},
		autoBind:true,
		layout:{
			type:"tree"
		}
	}).getKendoDiagram();
	
	function visualTemplate(options){
		var dataItem=options.dataItem;
		var dataviz=kendo.dataviz;
		var g=new dataviz.diagram.Group({
			autoSize:true
		});
		
		g.append(new dataviz.diagram.Rectangle({
				width:60,
				height:60
		}));
		
		g.append(new dataviz.diagram.Image({
			source:"images/"+dataItem.name.toLowerCase()+".png",
			x:0,
			y:0,
			width:60,
			height:60
		}));
		
		return g;
	}
	
	$("#shapesPanelBar").kendoPanelBar({
		expandMode:"multiple"
	}).getKendoPanelBar();
	
	$("#shapesPanelBar").kendoDraggable({
		filter:"img",
		hint:function(element){
			return element.clone();
		}
	});
	
	$("#toolbar").kendoToolBar({
		items:[{type:"button",text:"Retrieve JSON", click: retrieveJSON}]
	});
	
	$("#msgWin").kendoWindow({
		width:"500px",
		height:"350px",
		title:"Tree JSON",
		visible:false,
		actions:["Close"]
	});
	
	function retrieveJSON(){
		var data=$("#diagram").data("kendoDiagram").dataSource.data();
		$("#jsonText").text(JSON.stringify(data,null,2));
		$("#msgWin").data("kendoWindow").center().open();
	}
	
	$("#diagram").kendoDropTarget({
		drop:function(e){
			if(e.draggable.hint){
				var position=diagram.documentToModel({x:e.pageX, y:e.pageY});
				var target= getNode(position);
				if(target){
					var item=target.dataItem;
					item.items.push({"name":e.draggable.hint.attr("name"),"items":[]});
				}else{
					diagram.dataSource.add({"name":e.draggable.hint.attr("name"),"items":[]});
				}
			}
		}
	});
	
	function getNode(position){
		var nodes=diagram.shapes;
		var node;
		for(var i=0;i<nodes.length;i++){
			node=nodes[i];
			if(node.bounds().contains(position)){
				return node;
			}
		}
	}
}])