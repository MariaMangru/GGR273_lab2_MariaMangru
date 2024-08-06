ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32610").setExtent([-527440.381567, 4880109.570870, 3115736.854116, 6857568.479128]);
var wms_layers = [];

var format_AlbertaBoundary_0 = new ol.format.GeoJSON();
var features_AlbertaBoundary_0 = format_AlbertaBoundary_0.readFeatures(json_AlbertaBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32610'});
var jsonSource_AlbertaBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_0.addFeatures(features_AlbertaBoundary_0);
var lyr_AlbertaBoundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_0, 
                style: style_AlbertaBoundary_0,
                popuplayertitle: "AlbertaBoundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_0.png" /> AlbertaBoundary'
            });
var format_AlbertaWaterbodies_1 = new ol.format.GeoJSON();
var features_AlbertaWaterbodies_1 = format_AlbertaWaterbodies_1.readFeatures(json_AlbertaWaterbodies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32610'});
var jsonSource_AlbertaWaterbodies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaWaterbodies_1.addFeatures(features_AlbertaWaterbodies_1);
var lyr_AlbertaWaterbodies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaWaterbodies_1, 
                style: style_AlbertaWaterbodies_1,
                popuplayertitle: "Alberta Waterbodies",
                interactive: true,
                title: '<img src="styles/legend/AlbertaWaterbodies_1.png" /> Alberta Waterbodies'
            });
var format_FishStocking2024_2 = new ol.format.GeoJSON();
var features_FishStocking2024_2 = format_FishStocking2024_2.readFeatures(json_FishStocking2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32610'});
var jsonSource_FishStocking2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStocking2024_2.addFeatures(features_FishStocking2024_2);
var lyr_FishStocking2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStocking2024_2, 
                style: style_FishStocking2024_2,
                popuplayertitle: "Fish Stocking (2024)",
                interactive: true,
    title: 'Fish Stocking (2024)<br />\
    <img src="styles/legend/FishStocking2024_2_0.png" /> 0 - 2550<br />\
    <img src="styles/legend/FishStocking2024_2_1.png" /> 2550 - 8120<br />\
    <img src="styles/legend/FishStocking2024_2_2.png" /> 8120 - 23500<br />\
    <img src="styles/legend/FishStocking2024_2_3.png" /> 23500 - 110000<br />\
    <img src="styles/legend/FishStocking2024_2_4.png" /> 110000 - 1613075<br />'
        });

lyr_AlbertaBoundary_0.setVisible(true);lyr_AlbertaWaterbodies_1.setVisible(true);lyr_FishStocking2024_2.setVisible(true);
var layersList = [lyr_AlbertaBoundary_0,lyr_AlbertaWaterbodies_1,lyr_FishStocking2024_2];
lyr_AlbertaBoundary_0.set('fieldAliases', {'fid': 'fid', 'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_AlbertaWaterbodies_1.set('fieldAliases', {'fid': 'fid', 'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', 'fid_2': 'fid_2', 'PRUID_2': 'PRUID_2', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStocking2024_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'NumStock': 'NumStock', });
lyr_AlbertaBoundary_0.set('fieldImages', {'fid': 'TextEdit', 'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_AlbertaWaterbodies_1.set('fieldImages', {'fid': 'TextEdit', 'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'TextEdit', 'PRUID': 'TextEdit', 'fid_2': 'TextEdit', 'PRUID_2': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_FishStocking2024_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'NumStock': 'Range', });
lyr_AlbertaBoundary_0.set('fieldLabels', {'fid': 'no label', 'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_AlbertaWaterbodies_1.set('fieldLabels', {'fid': 'no label', 'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', 'fid_2': 'no label', 'PRUID_2': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStocking2024_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - always visible', 'Map Author': 'header label - always visible', 'NumStock': 'inline label - always visible', });
lyr_FishStocking2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});