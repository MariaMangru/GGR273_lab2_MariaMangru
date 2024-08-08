ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32610").setExtent([-329009.650585, 5425574.183824, 1429078.906990, 6659287.192815]);
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
                interactive: false,
                title: '<img src="styles/legend/AlbertaWaterbodies_1.png" /> Alberta Waterbodies'
            });
var format_FishStockingPoints_2 = new ol.format.GeoJSON();
var features_FishStockingPoints_2 = format_FishStockingPoints_2.readFeatures(json_FishStockingPoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32610'});
var jsonSource_FishStockingPoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_2.addFeatures(features_FishStockingPoints_2);
var lyr_FishStockingPoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_2, 
                style: style_FishStockingPoints_2,
                popuplayertitle: "Fish Stocking Points",
                interactive: true,
    title: 'Fish Stocking Points<br />\
    <img src="styles/legend/FishStockingPoints_2_0.png" /> 0 - 2550<br />\
    <img src="styles/legend/FishStockingPoints_2_1.png" /> 2551 - 8120<br />\
    <img src="styles/legend/FishStockingPoints_2_2.png" /> 8121 - 23500<br />\
    <img src="styles/legend/FishStockingPoints_2_3.png" /> 23501 - 110000<br />\
    <img src="styles/legend/FishStockingPoints_2_4.png" /> 110001 - 1613075<br />'
        });

lyr_AlbertaBoundary_0.setVisible(true);lyr_AlbertaWaterbodies_1.setVisible(true);lyr_FishStockingPoints_2.setVisible(true);
var layersList = [lyr_AlbertaBoundary_0,lyr_AlbertaWaterbodies_1,lyr_FishStockingPoints_2];
lyr_AlbertaBoundary_0.set('fieldAliases', {'fid': 'fid', 'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_AlbertaWaterbodies_1.set('fieldAliases', {'fid': 'fid', 'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', 'fid_2': 'fid_2', 'PRUID_2': 'PRUID_2', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStockingPoints_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'Numstock': 'Numstock', });
lyr_AlbertaBoundary_0.set('fieldImages', {'fid': 'TextEdit', 'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_AlbertaWaterbodies_1.set('fieldImages', {'fid': 'TextEdit', 'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'TextEdit', 'PRUID': 'TextEdit', 'fid_2': 'TextEdit', 'PRUID_2': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_FishStockingPoints_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'Numstock': 'TextEdit', });
lyr_AlbertaBoundary_0.set('fieldLabels', {'fid': 'no label', 'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_AlbertaWaterbodies_1.set('fieldLabels', {'fid': 'no label', 'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', 'fid_2': 'no label', 'PRUID_2': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStockingPoints_2.set('fieldLabels', {'DISTRICT': 'inline label - always visible', 'WATERBODY': 'inline label - always visible', 'Latitude': 'no label', 'Longitude': 'no label', 'SPECIES': 'inline label - always visible', 'GENOTYPE': 'inline label - always visible', 'STOCKED -': 'no label', 'STOCKING N': 'no label', 'PLANNED ST': 'inline label - always visible', 'Map Author': 'header label - always visible', 'Numstock': 'inline label - always visible', });
lyr_FishStockingPoints_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});