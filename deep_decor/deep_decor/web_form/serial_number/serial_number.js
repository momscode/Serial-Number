frappe.ready(function() {
	// bind events here
	
	frappe.web_form.validate = () => {
		
		let data = frappe.web_form.get_values();
		if (data.serial_no) {
			frappe.call({
				method: "deep_decor.deep_decor.web_form.serial_number.serial_number.number",
				args: {
				"field": data.serial_no,
				"doctype":"Serial No"
				}, 
				callback: function(r) {
					if(r.message.length<1)
					{
						frappe.msgprint(__("Please Check Serial Number "));
						return false;
						}
						else{
					for (var i=0; i<=r.message.length; i++){
						debugger;
						var data1=r.message[i].serial_no;
			msgprint("Notification"
    + "<hr>"
    + "<ul>"
            + "<li></b>Warranty Date: "+ r.message[i].warranty_expiry_date+"</li>"
            + "<li></b>Amc Expiry Date: "+r.message[i].warranty_expiry_date+"</li>"
            + "<li></b>Maintance Status: "+r.message[i].maintenance_status+"</li>"
    + "</ul>","Warranty Status")
					
					//frappe.web_form.validated = false;
					}
				}
					
				}
			});
			
		}
		return false;
	}
	
	

	})
	
	