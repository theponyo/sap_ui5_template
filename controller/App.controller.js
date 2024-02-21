sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/Carousel',
    'sap/m/Button',
    'sap/m/Title'
], function(Controller, Carousel, Button, Title) {
    'use strict';
    return Controller.extend ("ui5.controllers.App",
    {
       onPress1(oControlEvent)
        {
           let getSource = oControlEvent.getSource();
           if (getSource.getEventingParent() instanceof Carousel){
                getSource.getEventingParent().next();
                let getUserName = prompt("Do you have a Name?");
                getSource.getEventingParent().addPage(
                    new Button({
                        text: getUserName,
                        press: this.onPress2
                    })
                )
           }
        },
        onPress2(oControlEvent){
            let getSource = oControlEvent.getSource();
            if(getSource instanceof Button)
            {
                console.log(getSource.getText());
            }

        }
    });

    
});
