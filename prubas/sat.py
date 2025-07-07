import xml.etree.ElementTree as ET

# Cargar el archivo XML
tree = ET.parse('prueba.xml')
root = tree.getroot()

# Definir el namespace
ns = {'cfdi': 'http://www.sat.gob.mx/cfd/4'}

# Buscar el atributo UUID en el elemento TimbreFiscalDigital
timbre = root.find('.//cfdi:Complemento//tfd:TimbreFiscalDigital', ns)

if timbre is not None:
    uuid = timbre.get('UUID')
    print(f"UUID: {uuid}")
else:
    print("No se encontró el elemento TimbreFiscalDigital.")
