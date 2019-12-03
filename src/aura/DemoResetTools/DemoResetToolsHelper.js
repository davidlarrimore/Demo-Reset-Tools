({
    refreshTaskItems : function(component, event, helper) {
        let initAction = component.get("c.getResetTasks");
        initAction.setCallback(this, function(response) {
            switch (response.getState()) {
                case "SUCCESS" :
<<<<<<< HEAD
                    let returnValue = response.getReturnValue();
                    component.set("v.resetTaskItems", returnValue);
                    if (returnValue != null)
                    	for (const item of returnValue)
                        	if (item.itemQueryError) {
                            	component.find("notifLib").showToast({
                                	mode: "sticky",
                                	variant: "error",
                                	message: "A query error was encountered on the \"{0}\" demo reset task. Check the object API name and WHERE clause expression.",
                                	messageData: [ { url: item.itemLink, label: item.itemDescription } ]
                            	});
                        	}
=======
                    component.set("v.resetTaskItems", response.getReturnValue());
                    for (const item of response.getReturnValue())
                        if (item.itemQueryError) {
                            component.find("notifLib").showToast({
                                mode: "sticky",
                                variant: "error",
                                message: "A query error was encountered on the \"{0}\" demo reset task. Check the object API name and WHERE clause expression.",
                                messageData: [ { url: item.itemLink, label: item.itemDescription } ]
                            });
                        }
>>>>>>> b5a7388703023e7d25123cca392d11270ca1a711
                    break;
            }
        })
        $A.enqueueAction(initAction);      		
    },
    
    refreshTotals : function(rows, component, event, helper) {
        let totalRecords = 0;
        for (const row of rows)
            totalRecords += row.itemCount;
        component.set("v.totalRecordsSelected", totalRecords);        
    }
})