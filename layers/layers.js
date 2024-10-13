var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2021_1 = new ol.format.GeoJSON();
var features_2021_1 = format_2021_1.readFeatures(json_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_1.addFeatures(features_2021_1);
var lyr_2021_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2021_1, 
                style: style_2021_1,
                popuplayertitle: "2021",
                interactive: true,
    title: '2021<br />\
    <img src="styles/legend/2021_1_0.png" /> 64 - 76,4<br />\
    <img src="styles/legend/2021_1_1.png" /> 76,4 - 83,8<br />\
    <img src="styles/legend/2021_1_2.png" /> 83,8 - 89,2<br />\
    <img src="styles/legend/2021_1_3.png" /> 89,2 - 93<br />\
    <img src="styles/legend/2021_1_4.png" /> 93 - 99<br />'
        });
var format_2022_2 = new ol.format.GeoJSON();
var features_2022_2 = format_2022_2.readFeatures(json_2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_2.addFeatures(features_2022_2);
var lyr_2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022_2, 
                style: style_2022_2,
                popuplayertitle: "2022",
                interactive: true,
    title: '2022<br />\
    <img src="styles/legend/2022_2_0.png" /> 65 - 77,4<br />\
    <img src="styles/legend/2022_2_1.png" /> 77,4 - 85,8<br />\
    <img src="styles/legend/2022_2_2.png" /> 85,8 - 90,2<br />\
    <img src="styles/legend/2022_2_3.png" /> 90,2 - 93,6<br />\
    <img src="styles/legend/2022_2_4.png" /> 93,6 - 97<br />'
        });
var format_2023_3 = new ol.format.GeoJSON();
var features_2023_3 = format_2023_3.readFeatures(json_2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_3.addFeatures(features_2023_3);
var lyr_2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023_3, 
                style: style_2023_3,
                popuplayertitle: "2023",
                interactive: true,
    title: '2023<br />\
    <img src="styles/legend/2023_3_0.png" /> 66 - 77,8<br />\
    <img src="styles/legend/2023_3_1.png" /> 77,8 - 86,6<br />\
    <img src="styles/legend/2023_3_2.png" /> 86,6 - 90,4<br />\
    <img src="styles/legend/2023_3_3.png" /> 90,4 - 93,6<br />\
    <img src="styles/legend/2023_3_4.png" /> 93,6 - 99<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_2021_1.setVisible(true);lyr_2022_2.setVisible(true);lyr_2023_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2021_1,lyr_2022_2,lyr_2023_3];
lyr_2021_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'Object': 'Object', });
lyr_2022_2.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'Object': 'Object', });
lyr_2023_3.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'Object': 'Object', });
lyr_2021_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'Object': 'Range', });
lyr_2022_2.set('fieldImages', {'PROVINSI': 'TextEdit', 'Object': 'Range', });
lyr_2023_3.set('fieldImages', {'PROVINSI': 'TextEdit', 'Object': 'Range', });
lyr_2021_1.set('fieldLabels', {'PROVINSI': 'no label', 'Object': 'no label', });
lyr_2022_2.set('fieldLabels', {'PROVINSI': 'no label', 'Object': 'no label', });
lyr_2023_3.set('fieldLabels', {'PROVINSI': 'no label', 'Object': 'no label', });
lyr_2023_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});