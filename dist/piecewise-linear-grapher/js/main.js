requirejs.config({paths:{"lang-json":"../lang/en/text/loc-acc-json","base-interactive-view":"../../common/components/base-interactive-view/js/views/base-interactive-view","base-view-template":"../../common/components/base-interactive-view/templates/base-view-template","limit-textbox":"../../common/components/limit-box/js/limit-textbox","spinner-model":"../../common/components/spinner/js/models/spinner-model","spinner-view":"../../common/components/spinner/js/views/spinner-view","spinner-template":"../../common/components/spinner/templates/spinner-template","plg-template":"../templates/plg-template","graph-view":"views/graph-view","graph-template":"../templates/graph-template","equation-panel-view":"views/equation-panel-view","equation-panel-template":"../templates/equation-panel-template","equation-popup-view":"views/equation-popup-view","equation-popup-template":"../templates/equation-popup-template","equation-about-view":"views/equation-about-view","equation-about-template":"../templates/equation-about-template","save-image-view":"views/save-image-view","equation-save-image-template":"../templates/equation-save-image-template","equation-axis-label-view":"views/equation-axis-label-view","equation-axis-label-template":"../templates/equation-axis-label-template","equation-error-msg-view":"views/equation-error-msg-view","equation-error-msg-template":"../templates/equation-error-msg-template","equation-save-msg-view":"views/equation-save-msg-view","equation-save-msg-template":"../templates/equation-save-msg-template","acc-manager-view":"../../common/components/accessibility-manager/view/accessibility-manager","acc-manager-model":"../../common/components/accessibility-manager/model/accessibility-manager",constants:"common/constants","main-model":"models/plg-main-model"}}),requirejs(["js/views/plg-main-view.js"],function(e){var t=window.screen,a=600,i=750
t.height>2e3&&(a=t.height/100*79.43),t.width>2e3&&(i=t.width/100*54.9),$("#plg-main-container-outer").height(a).width(i)
var n=new e({el:$("#plg-main-container-outer")})
n.render()})