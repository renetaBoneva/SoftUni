output "webapp_url" {
  value = azurerm_linux_web_app.linuxWebApp.default_hostname
}

output "webapp_ips" {
  value = azurerm_linux_web_app.linuxWebApp.outbound_ip_addresses
}
