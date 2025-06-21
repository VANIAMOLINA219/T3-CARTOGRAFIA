var wms_layers = [];

var format_DEPARTAMENTO_PASCO_0 = new ol.format.GeoJSON();
var features_DEPARTAMENTO_PASCO_0 = format_DEPARTAMENTO_PASCO_0.readFeatures(json_DEPARTAMENTO_PASCO_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTO_PASCO_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTO_PASCO_0.addFeatures(features_DEPARTAMENTO_PASCO_0);
var lyr_DEPARTAMENTO_PASCO_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTAMENTO_PASCO_0, 
                style: style_DEPARTAMENTO_PASCO_0,
                popuplayertitle: 'DEPARTAMENTO_PASCO',
                interactive: true,
                title: '<img src="styles/legend/DEPARTAMENTO_PASCO_0.png" /> DEPARTAMENTO_PASCO'
            });
var format_PROVINCIAS_PASCO_1 = new ol.format.GeoJSON();
var features_PROVINCIAS_PASCO_1 = format_PROVINCIAS_PASCO_1.readFeatures(json_PROVINCIAS_PASCO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIAS_PASCO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIAS_PASCO_1.addFeatures(features_PROVINCIAS_PASCO_1);
var lyr_PROVINCIAS_PASCO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVINCIAS_PASCO_1, 
                style: style_PROVINCIAS_PASCO_1,
                popuplayertitle: 'PROVINCIAS_PASCO',
                interactive: true,
    title: 'PROVINCIAS_PASCO<br />\
    <img src="styles/legend/PROVINCIAS_PASCO_1_0.png" /> DANIEL ALCIDES CARRION<br />\
    <img src="styles/legend/PROVINCIAS_PASCO_1_1.png" /> OXAPAMPA<br />\
    <img src="styles/legend/PROVINCIAS_PASCO_1_2.png" /> PASCO<br />' });
var format_QUEBRADAS_RIOS_PASCO_2 = new ol.format.GeoJSON();
var features_QUEBRADAS_RIOS_PASCO_2 = format_QUEBRADAS_RIOS_PASCO_2.readFeatures(json_QUEBRADAS_RIOS_PASCO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QUEBRADAS_RIOS_PASCO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUEBRADAS_RIOS_PASCO_2.addFeatures(features_QUEBRADAS_RIOS_PASCO_2);
var lyr_QUEBRADAS_RIOS_PASCO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUEBRADAS_RIOS_PASCO_2, 
                style: style_QUEBRADAS_RIOS_PASCO_2,
                popuplayertitle: 'QUEBRADAS_RIOS_PASCO',
                interactive: true,
    title: 'QUEBRADAS_RIOS_PASCO<br />\
    <img src="styles/legend/QUEBRADAS_RIOS_PASCO_2_0.png" /> Quebrada Húmed<br />\
    <img src="styles/legend/QUEBRADAS_RIOS_PASCO_2_1.png" /> Río Principal<br />\
    <img src="styles/legend/QUEBRADAS_RIOS_PASCO_2_2.png" /> Río Secundario<br />' });
var format_RVD_PASCO_3 = new ol.format.GeoJSON();
var features_RVD_PASCO_3 = format_RVD_PASCO_3.readFeatures(json_RVD_PASCO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVD_PASCO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVD_PASCO_3.addFeatures(features_RVD_PASCO_3);
var lyr_RVD_PASCO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVD_PASCO_3, 
                style: style_RVD_PASCO_3,
                popuplayertitle: 'RVD_PASCO',
                interactive: true,
                title: '<img src="styles/legend/RVD_PASCO_3.png" /> RVD_PASCO'
            });
var format_RVV_PASCO_4 = new ol.format.GeoJSON();
var features_RVV_PASCO_4 = format_RVV_PASCO_4.readFeatures(json_RVV_PASCO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVV_PASCO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVV_PASCO_4.addFeatures(features_RVV_PASCO_4);
var lyr_RVV_PASCO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVV_PASCO_4, 
                style: style_RVV_PASCO_4,
                popuplayertitle: 'RVV_PASCO',
                interactive: true,
                title: '<img src="styles/legend/RVV_PASCO_4.png" /> RVV_PASCO'
            });
var format_INSTITUCIONESEDUCATIVASPASCO_5 = new ol.format.GeoJSON();
var features_INSTITUCIONESEDUCATIVASPASCO_5 = format_INSTITUCIONESEDUCATIVASPASCO_5.readFeatures(json_INSTITUCIONESEDUCATIVASPASCO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INSTITUCIONESEDUCATIVASPASCO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INSTITUCIONESEDUCATIVASPASCO_5.addFeatures(features_INSTITUCIONESEDUCATIVASPASCO_5);
var lyr_INSTITUCIONESEDUCATIVASPASCO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INSTITUCIONESEDUCATIVASPASCO_5, 
                style: style_INSTITUCIONESEDUCATIVASPASCO_5,
                popuplayertitle: 'INSTITUCIONES EDUCATIVAS PASCO',
                interactive: true,
    title: 'INSTITUCIONES EDUCATIVAS PASCO<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_0.png" /> A1<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_1.png" /> A2<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_2.png" /> A3<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_3.png" /> B0<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_4.png" /> D1<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_5.png" /> D2<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_6.png" /> E0<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_7.png" /> E2<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_8.png" /> F0<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_9.png" /> K0<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_10.png" /> L0<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_11.png" /> T0<br />\
    <img src="styles/legend/INSTITUCIONESEDUCATIVASPASCO_5_12.png" /> <br />' });

lyr_DEPARTAMENTO_PASCO_0.setVisible(true);lyr_PROVINCIAS_PASCO_1.setVisible(true);lyr_QUEBRADAS_RIOS_PASCO_2.setVisible(true);lyr_RVD_PASCO_3.setVisible(true);lyr_RVV_PASCO_4.setVisible(true);lyr_INSTITUCIONESEDUCATIVASPASCO_5.setVisible(true);
var layersList = [lyr_DEPARTAMENTO_PASCO_0,lyr_PROVINCIAS_PASCO_1,lyr_QUEBRADAS_RIOS_PASCO_2,lyr_RVD_PASCO_3,lyr_RVV_PASCO_4,lyr_INSTITUCIONESEDUCATIVASPASCO_5];
lyr_DEPARTAMENTO_PASCO_0.set('fieldAliases', {'fid_': 'fid_', 'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', });
lyr_PROVINCIAS_PASCO_1.set('fieldAliases', {'fid_': 'fid_', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', 'ENLACES': 'ENLACES', });
lyr_QUEBRADAS_RIOS_PASCO_2.set('fieldAliases', {'fid_': 'fid_', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_RVD_PASCO_3.set('fieldAliases', {'fid_': 'fid_', 'RODADURA': 'RODADURA', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_RVV_PASCO_4.set('fieldAliases', {'fid_': 'fid_', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_INSTITUCIONESEDUCATIVASPASCO_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'codlocal': 'codlocal', 'dircen': 'dircen', 'iddistrito': 'iddistrito', 'nombdist': 'nombdist', 'nombprov': 'nombprov', 'nombdep': 'nombdep', 'cenedu': 'cenedu', 'codmod': 'codmod', 'talumno': 'talumno', 'tdocente': 'tdocente', 'totalh': 'totalh', 'totalm': 'totalm', 'id_nivel': 'id_nivel', 'fuente': 'fuente', 'url_escale': 'url_escale', 'MM': 'MM', 'INUND': 'INUND', });
lyr_DEPARTAMENTO_PASCO_0.set('fieldImages', {'fid_': '', 'NOMBDEP': '', 'COUNT': '', 'FIRST_IDDP': '', 'HECTARES': '', });
lyr_PROVINCIAS_PASCO_1.set('fieldImages', {'fid_': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'LAST_DCTO': 'TextEdit', 'LAST_LEY': 'TextEdit', 'FIRST_FECH': 'TextEdit', 'LAST_FECHA': 'TextEdit', 'MIN_SHAPE_': 'TextEdit', 'ha': 'TextEdit', 'ENLACES': 'TextEdit', });
lyr_QUEBRADAS_RIOS_PASCO_2.set('fieldImages', {'fid_': 'TextEdit', 'Rasgo_Prin': 'TextEdit', 'Rasgo_Secu': 'TextEdit', 'Nombre': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_RVD_PASCO_3.set('fieldImages', {'fid_': 'TextEdit', 'RODADURA': 'TextEdit', 'COD_DS11': 'TextEdit', 'COD_DS12': 'TextEdit', 'TRAY_DS12': 'TextEdit', 'TRAY_DS11': 'TextEdit', 'UBIGEO': 'TextEdit', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'COD_DEP': 'TextEdit', 'COD_PROV': 'TextEdit', 'LONG_KM': 'TextEdit', 'OBS': 'TextEdit', 'SENTIDO': 'TextEdit', 'BASE': 'TextEdit', 'DATA': 'TextEdit', 'FECHA_ACTU': 'TextEdit', 'FUENTE': 'TextEdit', 'COD_RODADU': 'TextEdit', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'TextEdit', });
lyr_RVV_PASCO_4.set('fieldImages', {'fid_': 'TextEdit', 'COD_DS11': 'TextEdit', 'COD_DS12': 'TextEdit', 'TRAY_DS12': 'TextEdit', 'TRAY_DS11': 'TextEdit', 'UBIGEO': 'TextEdit', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'COD_DEP': 'TextEdit', 'COD_PROV': 'TextEdit', 'LONG_KM': 'TextEdit', 'OBS': 'TextEdit', });
lyr_INSTITUCIONESEDUCATIVASPASCO_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'codlocal': 'TextEdit', 'dircen': 'TextEdit', 'iddistrito': 'TextEdit', 'nombdist': 'TextEdit', 'nombprov': 'TextEdit', 'nombdep': 'TextEdit', 'cenedu': 'TextEdit', 'codmod': 'TextEdit', 'talumno': 'TextEdit', 'tdocente': 'TextEdit', 'totalh': 'TextEdit', 'totalm': 'TextEdit', 'id_nivel': 'TextEdit', 'fuente': 'TextEdit', 'url_escale': 'TextEdit', 'MM': 'TextEdit', 'INUND': 'TextEdit', });
lyr_DEPARTAMENTO_PASCO_0.set('fieldLabels', {'fid_': 'no label', 'NOMBDEP': 'no label', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', });
lyr_PROVINCIAS_PASCO_1.set('fieldLabels', {'fid_': 'no label', 'COUNT': 'no label', 'FIRST_IDPR': 'no label', 'NOMBPROV': 'inline label - visible with data', 'FIRST_NOMB': 'no label', 'LAST_DCTO': 'no label', 'LAST_LEY': 'no label', 'FIRST_FECH': 'no label', 'LAST_FECHA': 'no label', 'MIN_SHAPE_': 'no label', 'ha': 'no label', 'ENLACES': 'no label', });
lyr_QUEBRADAS_RIOS_PASCO_2.set('fieldLabels', {'fid_': 'no label', 'Rasgo_Prin': 'inline label - visible with data', 'Rasgo_Secu': 'no label', 'Nombre': 'no label', 'Longitud': 'no label', });
lyr_RVD_PASCO_3.set('fieldLabels', {'fid_': 'no label', 'RODADURA': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'no label', 'TRAY_DS11': 'no label', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'no label', 'OBS': 'no label', 'SENTIDO': 'no label', 'BASE': 'no label', 'DATA': 'no label', 'FECHA_ACTU': 'no label', 'FUENTE': 'no label', 'COD_RODADU': 'no label', 'NOMBDIST': 'no label', 'CAPITAL': 'no label', });
lyr_RVV_PASCO_4.set('fieldLabels', {'fid_': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'no label', 'TRAY_DS11': 'no label', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'no label', 'OBS': 'no label', });
lyr_INSTITUCIONESEDUCATIVASPASCO_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'codlocal': 'no label', 'dircen': 'no label', 'iddistrito': 'no label', 'nombdist': 'no label', 'nombprov': 'no label', 'nombdep': 'no label', 'cenedu': 'no label', 'codmod': 'no label', 'talumno': 'no label', 'tdocente': 'no label', 'totalh': 'no label', 'totalm': 'no label', 'id_nivel': 'no label', 'fuente': 'no label', 'url_escale': 'no label', 'MM': 'no label', 'INUND': 'no label', });
lyr_INSTITUCIONESEDUCATIVASPASCO_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});