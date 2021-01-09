from __future__ import unicode_literals

import frappe

def get_context(context):
	# do your magic here
	pass
@frappe.whitelist()
def number(field,doctype,Ignore_permissions=True):
    serial_no_list = frappe.db.sql("""select serial_no,warranty_expiry_date,amc_expiry_date,maintenance_status from `tabSerial No` where serial_no=%s""",(field),as_dict=1)
   
    if not frappe.has_permission(doctype):
        frappe.throw(_("No permission for {0}").format(doctype), frappe.PermissionError)
    #value = frappe.db.get_single_value(doctype, field)
    return serial_no_list