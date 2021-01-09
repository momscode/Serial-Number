// Copyright (c) 2021, anjuprasannan321@gmail.com and contributors
// For license information, please see license.txt

frappe.ui.form.on('Serial Number Status', {
	
		/*validate:function(frm,cdt,cdn)
		/{
			var d=locals[cdt][cdn]
	
			alert(d.serial_no)
			frappe.call({
				method: "deep_decor.deep_decor.web_form.serial_number.serial_number.number",
				args: {
				"field": d.serial_no,
				"doctype":"Serial No"
				}, 
				callback: function(r) {
					if(r.message.length<1)
							{
								frappe.msgprint(__("Please Check serial number "));
								frappe.validated = false;
								}
				
					
				}
			});
		}*/
	
});
