!function(){var i=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{}
l["plg-template"]=i(function(i,l,n,t,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,i.helpers),a=a||{}
var o,e="",p="function",r=this.escapeExpression
return e+='<div id="plg-grapher-container" class="plg-grapher-container">\r\n	<div id="plg-graph-label-container" class="plg-graph-label-container">\r\n		<div id="plg-obj-oval-background-one" class="plg-obj-oval-background one">\r\n			<div id="plg-obj-line" class="plg-obj-line one"></div>\r\n			<div id="plg-obj-dot" class="plg-obj-dot one"></div>\r\n			<div id="plg-obj-round-bg" class="plg-obj-round-bg one"></div>\r\n			<div id="plg-obj-image" class="plg-obj-image one"></div>\r\n		</div>\r\n		<div id="plg-obj-oval-background-two" class="plg-obj-oval-background two">\r\n			<div id="plg-obj-line" class="plg-obj-line two"></div>\r\n			<div id="plg-obj-dot" class="plg-obj-dot two"></div>\r\n			<div id="plg-obj-round-bg" class="plg-obj-round-bg two"></div>\r\n			<div id="plg-obj-image" class="plg-obj-image two"></div>\r\n		</div>\r\n		<div id="plg-obj-oval-background-three" class="plg-obj-oval-background three">\r\n			<div id="plg-obj-line" class="plg-obj-line three"></div>\r\n			<div id="plg-obj-dot" class="plg-obj-dot three"></div>\r\n			<div id="plg-obj-round-bg" class="plg-obj-round-bg three"></div>\r\n			<div id="plg-obj-image" class="plg-obj-image three"></div>\r\n		</div>\r\n		<div id="plg-obj-oval-background-four" class="plg-obj-oval-background four">\r\n			<div id="plg-obj-line" class="plg-obj-dot four"></div>\r\n			<div id="plg-obj-dot" class="plg-obj-line dot"></div>\r\n			<div id="plg-obj-round-bg" class="plg-obj-round-bg four"></div>\r\n			<div id="plg-obj-image" class="plg-obj-image four"></div>\r\n		</div>\r\n	</div>\r\n	<div id="plg-grapher-control" class="plg-grapher-control">\r\n		\r\n	</div>\r\n\r\n</div>\r\n<div id ="plg-equation-container" class="plg-equation-container">\r\n	<div id="plg-equation-panel-one" class="plg-equation-panel plg-equation-panel-one"></div>\r\n	<div id="plg-equation-panel-two" class="plg-equation-panel plg-equation-panel-two"></div>\r\n	<div id="plg-equation-panel-three" class="plg-equation-panel plg-equation-panel-three"></div>\r\n	<div id="plg-equation-panel-four" class="plg-equation-panel plg-equation-panel-four"></div>\r\n</div>\r\n\r\n<div id="plg-btn-container" class="plg-btn-container">\r\n		<div id="plg-graph-button-pencil" class="plg-graph-button-pencil plg-graph-button-pencil-position " title="'+r((o=l&&l["activity-json"],o=null==o||o===!1?o:o.tooltip,o=null==o||o===!1?o:o.titlePencil,typeof o===p?o.apply(l):o))+'">\r\n			<span id="plg-pencil-image" class="plg-pencil-image fa fa-pencil fa-lg"></span>\r\n		</div>\r\n        <div id="plg-graph-button-close" class="plg-graph-button-close plg-graph-button-close-position " title="'+r((o=l&&l["activity-json"],o=null==o||o===!1?o:o.tooltip,o=null==o||o===!1?o:o.titleDelete,typeof o===p?o.apply(l):o))+'">\r\n        	<span id="plg-delete-image" class="plg-delete-image fa fa-times-circle fa-lg"></span>\r\n        </div>\r\n	<div id="plg-btn-spinner" class="plg-btn-spinner"> \r\n		<div id="plg-spinner-image" class="plg-spinner-image">\r\n			 <div id="plg-img-obj" class="plg-img-obj" > </div>\r\n		</div>\r\n		 <div id="plg-spinner-btn-up-arrow" class="arrowbutton-container up fa fa-caret-up"></div>\r\n		 <div id="plg-spinner-btn-down-arrow" class="arrowbutton-container down fa fa-caret-down"></div>\r\n	</div>\r\n	<div id="plg-slider" class="plg-btn-slider"></div>\r\n\r\n	<div id="plg-btn-section-1" class="plg-btn-section-1">\r\n		<span id="fa-arrows-v" class="fa fa-arrows-v fa-2x"></span>\r\n		<div id="plg-vertical-increase-button" title="'+r((o=l&&l["activity-json"],o=null==o||o===!1?o:o.tooltip,o=null==o||o===!1?o:o.titleVerticalZoomIn,typeof o===p?o.apply(l):o))+'" class="plg-btn-container-button "><span id="" class="fa fa-plus fa-lg"></span></div>\r\n		<div id="plg-vertical-default-button" title="'+r((o=l&&l["activity-json"],o=null==o||o===!1?o:o.tooltip,o=null==o||o===!1?o:o.titleVerticalDefault,typeof o===p?o.apply(l):o))+'" class="plg-btn-container-button "><span id="" class="fa fa-circle-o fa-lg"></span></div>\r\n		<div id="plg-vertical-decrease-button" title="'+r((o=l&&l["activity-json"],o=null==o||o===!1?o:o.tooltip,o=null==o||o===!1?o:o.titleVerticalZoomOut,typeof o===p?o.apply(l):o))+'" class="plg-btn-container-button "><span id="" class="fa fa-minus fa-lg"></span></div>\r\n	  </div>\r\n	  <div id="plg-btn-section-2" class="plg-btn-section-2">\r\n		<span id="fa-arrows-h" class="fa fa-arrows-h fa-2x"></span>\r\n		<div id="plg-horizontal-increase-button" title="'+r((o=l&&l["activity-json"],o=null==o||o===!1?o:o.tooltip,o=null==o||o===!1?o:o.titleHorizontalZoomIn,typeof o===p?o.apply(l):o))+'" class="plg-btn-container-button "><span id="" class="fa fa-plus fa-lg"></span></div>\r\n		<div id="plg-horizontal-default-button" title="'+r((o=l&&l["activity-json"],o=null==o||o===!1?o:o.tooltip,o=null==o||o===!1?o:o.titleHorizontalDefault,typeof o===p?o.apply(l):o))+'" class="plg-btn-container-button "><span id="" class="fa fa-circle-o fa-lg"></span></div>\r\n		<div id="plg-horizontal-decrease-button" title="'+r((o=l&&l["activity-json"],o=null==o||o===!1?o:o.tooltip,o=null==o||o===!1?o:o.titleHorizontalZoomOut,typeof o===p?o.apply(l):o))+'" class="plg-btn-container-button "><span id="" class="fa fa-minus fa-lg"></span></div>\r\n	    </div>\r\n	  <div id="plg-btn-section-3" class="plg-btn-section-3">\r\n		<div id="plg-line-segment" title="'+r((o=l&&l["activity-json"],o=null==o||o===!1?o:o.tooltip,o=null==o||o===!1?o:o.titleLineSegment,typeof o===p?o.apply(l):o))+'" class="plg-btn-container-button ">\r\n			<div id="svg1" class="svg1" title="Create a line segment">\r\n				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="23px" height="23px">\r\n					<path opacity="0.7" fill="rgb(255, 255, 255)" d="M 6.55 18.85 C 6.55 18.85 4.42 16.72 4.42 16.72 C 4.42 16.72 19.62 1.52 19.62 1.52 C 19.62 1.52 21.75 3.65 21.75 3.65 C 21.75 3.65 6.55 18.85 6.55 18.85" fillRule="evenodd" /><rect fill="rgb(255, 255, 255)" x="1" y="16" width="6" height="6" /><rect fill="rgb(255, 255, 255)" x="16" y="1" width="6" height="6" />\r\n				</svg>\r\n			</div>\r\n		</div>\r\n	<div id="plg-positive-infinity" title="'+r((o=l&&l["activity-json"],o=null==o||o===!1?o:o.tooltip,o=null==o||o===!1?o:o.titlePositiveRay,typeof o===p?o.apply(l):o))+'" class="plg-btn-container-button ">\r\n	<div id="svg2" class="svg2" title="Create a ray approaching positive infinity"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">\r\n<path opacity="0.7" fill="rgb(255, 255, 255)" mask="url(&quot;#mask0&quot;)" d="M 4.77 20.62 C 4.77 20.62 2.65 18.5 2.65 18.5 C 2.65 18.5 27.35 -6.2 27.35 -6.2 C 27.35 -6.2 29.47 -4.08 29.47 -4.08 C 29.47 -4.08 4.77 20.62 4.77 20.62" fillRule="evenodd" /><rect fill="rgb(255, 255, 255)" x="1" y="17" width="6" height="6" /></svg>\r\n</div>\r\n</div>\r\n		<div id="plg-negative-infinity" title="'+r((o=l&&l["activity-json"],o=null==o||o===!1?o:o.tooltip,o=null==o||o===!1?o:o.titleNegativeRay,typeof o===p?o.apply(l):o))+'" class="plg-btn-container-button ">\r\n		<div id="svg3" class="svg3" title="Create a ray approaching negative infinity"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">\r\n<path opacity="0.7" fill="rgb(255, 255, 255)" mask="url(&quot;#mask0&quot;)" d="M -3.13 28.52 C -3.13 28.52 -5.25 26.4 -5.25 26.4 C -5.25 26.4 19.45 1.7 19.45 1.7 C 19.45 1.7 21.57 3.82 21.57 3.82 C 21.57 3.82 -3.13 28.52 -3.13 28.52" fillRule="evenodd" /><rect fill="rgb(255, 255, 255)" x="17" y="1" width="6" height="6" /></svg>\r\n</div>\r\n</div>\r\n	  </div>\r\n</div>'})}()