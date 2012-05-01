/* <copyright>
This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
(c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
</copyright> */

////////////////////////////////////////////////////////////////////////
//
var Montage = 	require("montage/core/core").Montage;
////////////////////////////////////////////////////////////////////////
//	
exports.BaseDocumentModel = Montage.create(Montage, {
	////////////////////////////////////////////////////////////////////
	//
	hasTemplate: {
		enumerable: false,
        value: false
    },
    ////////////////////////////////////////////////////////////////////
	//
	file: {
        value: null
    },
	////////////////////////////////////////////////////////////////////
	//
    _name: {
        value: null
    },
	////////////////////////////////////////////////////////////////////
	//
    _isActive: {
        value: null
    },
	////////////////////////////////////////////////////////////////////
	//
    _needsSave: {
        value: null
    },
    ////////////////////////////////////////////////////////////////////
	//
    _currentView: {
        value: null
    },
    ////////////////////////////////////////////////////////////////////
	//
	njdata: {
        value: null
    },
    ////////////////////////////////////////////////////////////////////
	//
	views: {
        value: null
    },
    ////////////////////////////////////////////////////////////////////
	//
	save: {
        value: null
    },
    ////////////////////////////////////////////////////////////////////
	//
	saveAs: {
        value: null
    },
    ////////////////////////////////////////////////////////////////////
	//
	saveAll: {
        value: null
    },
    ////////////////////////////////////////////////////////////////////
	//
	close: {
        value: null
    }
	////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////
});
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////