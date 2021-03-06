/* jshint strict:true */
/* jslint node: true */
/* jslint esversion: 9 */
'use strict';

// structure of systeminformation data
const sysInfo = {
	'version':   {'type': 'string',  'role': 'text'},
	'time': {
		'current':      {'type': 'number',  'role': 'date'},
		'uptime':       {'type': 'number',  'role': 'value'},
		'timezone':     {'type': 'string',  'role': 'text'},
		'timezoneName': {'type': 'string',  'role': 'text'}
	},
	'system': {
		'manufacturer': {'type': 'string',  'role': 'text'},
		'model':        {'type': 'string',  'role': 'text'},
		'version':      {'type': 'string',  'role': 'text'},
		'serial':       {'type': 'string',  'role': 'text'},
		'uuid':         {'type': 'string',  'role': 'text'},
		'sku':          {'type': 'string',  'role': 'text'}
	},
	'bios': {
		'vendor':      {'type': 'string',  'role': 'text'},
		'version':     {'type': 'string',  'role': 'text'},
		'releaseDate': {'type': 'string',  'role': 'date'},
		'revision':    {'type': 'string',  'role': 'text'}
	},
	'baseboard': {
		'manufacturer': {'type': 'string',  'role': 'text'},
		'model':        {'type': 'string',  'role': 'text'},
		'version':      {'type': 'string',  'role': 'text'},
		'serial':       {'type': 'string',  'role': 'text'},
		'assetTag':     {'type': 'string',  'role': 'text'}
	},
	'chassis': {
		'manufacturer': {'type': 'string',  'role': 'text'},
		'model':        {'type': 'string',  'role': 'text'},
		'type':         {'type': 'string',  'role': 'text'},
		'version':      {'type': 'string',  'role': 'text'},
		'serial':       {'type': 'string',  'role': 'text'},
		'assetTag':     {'type': 'string',  'role': 'text'},
		'sku':          {'type': 'string',  'role': 'text'}
	},
	'cpu': {
		'manufacturer': {'type': 'string',  'role': 'text'},
		'brand':        {'type': 'string',  'role': 'text'},
		'speed':        {'type': 'number',  'role': 'value'},
		'speedmin':     {'type': 'number',  'role': 'value.min'},
		'speedmax':     {'type': 'number',  'role': 'value.max'},
		'cores':        {'type': 'number',  'role': 'value'},
		'physicalCores':{'type': 'number',  'role': 'value'},
		'processors':   {'type': 'string',  'role': 'text'},
		'socket':       {'type': 'string',  'role': 'text'},
		'vendor':       {'type': 'string',  'role': 'text'},
		'family':       {'type': 'string',  'role': 'text'},
		'model':        {'type': 'string',  'role': 'text'},
		'stepping':     {'type': 'string',  'role': 'text'},
		'revision':     {'type': 'string',  'role': 'text'},
		'voltage':      {'type': 'number',  'role': 'value'},
		'cache': {
			'l1d': {'type': 'number',  'role': 'value'},
			'l1i': {'type': 'number',  'role': 'value'},
			'l2':  {'type': 'number',  'role': 'value'},
			'l3':  {'type': 'number',  'role': 'value'}
		}
	},
	'cpuFlags': {'type': 'string',  'role': 'text'},
	'memLayout': [ 
		{
			'size':              {'type': 'number',  'role': 'value'},
			'bank':              {'type': 'number',  'role': 'value'},
			'type':              {'type': 'string',  'role': 'text'},
			'clockSpeed':        {'type': 'number',  'role': 'value'},
			'formFactor':        {'type': 'number',  'role': 'value'},
			'manufacturer':      {'type': 'string',  'role': 'text'},
			'partNum':           {'type': 'number',  'role': 'value'},
			'serialNum':         {'type': 'number',  'role': 'value'},
			'voltageConfigured': {'type': 'number',  'role': 'value'},
			'voltageMin':        {'type': 'number',  'role': 'value'},
			'voltageMax':        {'type': 'number',  'role': 'value'}
		}
	],
	'cpuCurrentSpeed': {
		'avg':  {'type': 'number',  'role': 'value'},
		'min':  {'type': 'number',  'role': 'value'},
		'max':  {'type': 'number',  'role': 'value'},
		'cores': [{'type': 'number',  'role': 'value'}]   
	},
	'cpuTemperature': {
		'main': {'type': 'number',  'role': 'value'},
		'cores':[{'type': 'number',  'role': 'value'}],
		'max':  {'type': 'number',  'role': 'value'}
	},
	'mem': {
		'total':     {'type': 'number',  'role': 'value'},
		'free':      {'type': 'number',  'role': 'value'},
		'used':      {'type': 'number',  'role': 'value'},
		'active':    {'type': 'number',  'role': 'value'},
		'buffcache': {'type': 'number',  'role': 'value'},
		'available': {'type': 'number',  'role': 'value'},
		'swaptotal': {'type': 'number',  'role': 'value'},
		'swapused':  {'type': 'number',  'role': 'value'},
		'swapfree':  {'type': 'number',  'role': 'value'}
	},
	'battery': {
		'hasbattery':      {'type': 'boolean', 'role': 'indicator'},
		'cyclecount':      {'type': 'number',  'role': 'value'},
		'ischarging':      {'type': 'boolean', 'role': 'indicator'},
		'maxcapacity':     {'type': 'number',  'role': 'value.max'},
		'currentcapacity': {'type': 'number',  'role': 'value.battery'},
		'percent':         {'type': 'number',  'role': 'value.battery'},
		'timeremaining':   {'type': 'number',  'role': 'value'},
		'acconnected':     {'type': 'boolean', 'role': 'indicator'},
		'type':            {'type': 'string',  'role': 'text'},
		'model':           {'type': 'string',  'role': 'text'},
		'manufacturer':    {'type': 'string',  'role': 'text'},
		'serial':          {'type': 'string',  'role': 'text'}
	},
	'graphics': {
		'controllers': [
			{
				'model':       {'type': 'string',  'role': 'text'},
				'vendor':      {'type': 'string',  'role': 'text'},
				'bus':         {'type': 'string',  'role': 'text'},
				'vram':        {'type': 'number',  'role': 'value'},
				'vramDynamic': {'type': 'number',  'role': 'value'}
			}
		],
		'displays': [
			{
				'vendor':               {'type': 'string',  'role': 'text'},
				'model':                {'type': 'string',  'role': 'text'},
				'main':                 {'type': 'string',  'role': 'text'},
				'builtin':              {'type': 'boolean', 'role': 'indicator'},
				'connection':           {'type': 'string',  'role': 'text'},
				'sizex':                {'type': 'number',  'role': 'value'},
				'sizey':                {'type': 'number',  'role': 'value'},
				'pixeldepth':           {'type': 'number',  'role': 'value'},
				'resolutionx':          {'type': 'number',  'role': 'value'},
				'resolutiony':          {'type': 'number',  'role': 'value'},
				'currentResX':          {'type': 'number',  'role': 'value'},
				'currentResY':          {'type': 'number',  'role': 'value'},
				'currentRefreshRate':   {'type': 'number',  'role': 'value'}
			}
		]
	},
	'osInfo': {
		'platform': {'type': 'string',  'role': 'text'},
		'distro':   {'type': 'string',  'role': 'text'},
		'release':  {'type': 'string',  'role': 'text'},
		'codename': {'type': 'string',  'role': 'text'},
		'kernel':   {'type': 'string',  'role': 'text'},
		'arch':     {'type': 'string',  'role': 'text'},
		'hostname': {'type': 'string',  'role': 'text'},
		'codepage': {'type': 'string',  'role': 'text'},
		'logofile': {'type': 'string',  'role': 'text'},
		'serial':   {'type': 'string',  'role': 'text'}
		// 'build':    {'type': 'string',  'role': 'text'}
	},
	'uuid': {
		'os': {'type': 'string',  'role': 'text'}
	},
	'shell': {'type': 'string',  'role': 'text'},
	'versions': {
		'kernel':           {'type': 'string',  'role': 'text'},
		'openssl':          {'type': 'string',  'role': 'text'},
		'systemOpenssl':    {'type': 'string',  'role': 'text'},
		'systemOpensslLib': {'type': 'string',  'role': 'text'},
		'node':             {'type': 'string',  'role': 'text'},
		'v8':               {'type': 'string',  'role': 'text'},
		'npm':              {'type': 'string',  'role': 'text'},
		'yarn':             {'type': 'string',  'role': 'text'},
		'pm2':              {'type': 'string',  'role': 'text'},
		'gulp':             {'type': 'string',  'role': 'text'},
		'grunt':            {'type': 'string',  'role': 'text'},
		'git':              {'type': 'string',  'role': 'text'},
		'tsc':              {'type': 'string',  'role': 'text'},
		'mysql':            {'type': 'string',  'role': 'text'},
		'redis':            {'type': 'string',  'role': 'text'},
		'mongodb':          {'type': 'string',  'role': 'text'},
		'apache':           {'type': 'string',  'role': 'text'},
		'ngginx':           {'type': 'string',  'role': 'text'},
		'php':              {'type': 'string',  'role': 'text'},
		'docker':           {'type': 'string',  'role': 'text'},
		'postfix':          {'type': 'string',  'role': 'text'},
		'postgresql':       {'type': 'string',  'role': 'text'},
		'perl':             {'type': 'string',  'role': 'text'},
		'python':           {'type': 'string',  'role': 'text'},
		'python3':          {'type': 'string',  'role': 'text'},
		'java':             {'type': 'string',  'role': 'text'},
		'gcc':              {'type': 'string',  'role': 'text'}
	},
	'users': [
		{
			'user':    {'type': 'string',  'role': 'text'},
			'tty':     {'type': 'string',  'role': 'text'},
			'date':    {'type': 'string',  'role': 'text'},
			'time':    {'type': 'string',  'role': 'text'},
			'ip':      {'type': 'string',  'role': 'text'},
			'command': {'type': 'string',  'role': 'text'}
		}
	],
	'diskLayout': [
		{
			'device':            {'type': 'string',  'role': 'text'},
			'type':              {'type': 'string',  'role': 'text'},
			'name':              {'type': 'string',  'role': 'text'},
			'vendor':            {'type': 'string',  'role': 'text'},
			'size':              {'type': 'number',  'role': 'value'},
			'totalCylinders':    {'type': 'string',  'role': 'text'},
			'totalHeads':        {'type': 'number',  'role': 'value'},
			'totalTracks':       {'type': 'number',  'role': 'value'},
			'totalSectors':      {'type': 'string',  'role': 'text'},
			'tracksPerCylinder': {'type': 'number',  'role': 'value'},
			'sectorsPerTrack':   {'type': 'number',  'role': 'value'},
			'bytesPerSector':    {'type': 'number',  'role': 'value'},
			'firmwareRevision':  {'type': 'string',  'role': 'text'},
			'serialNum':         {'type': 'number',  'role': 'value'},
			'interfaceType':     {'type': 'string',  'role': 'text'},
			'smartStatus':       {'type': 'number',  'role': 'value'}
		}
	],
	'blockDevices': [
		{
			'name':      {'type': 'string',  'role': 'text'},
			'type':      {'type': 'string',  'role': 'text'},
			'fstype':    {'type': 'string',  'role': 'text'},
			'mount':     {'type': 'string',  'role': 'text'},
			'size':      {'type': 'number',  'role': 'value'},
			'physical':  {'type': 'string',  'role': 'text'},
			'uuid':      {'type': 'string',  'role': 'text'},
			'label':     {'type': 'string',  'role': 'text'},
			'model':     {'type': 'string',  'role': 'text'},
			'serial':    {'type': 'string',  'role': 'text'},
			'removable': {'type': 'boolean', 'role': 'indicator'},
			'protocol':  {'type': 'string',  'role': 'text'}
		}
	],
	'disksIO': {
		'rIO':     {'type': 'number',  'role': 'value'},
		'wIO':     {'type': 'number',  'role': 'value'},
		'tIO':     {'type': 'number',  'role': 'value'},
		'rIO_sec': {'type': 'number',  'role': 'value'},
		'wIO_sec': {'type': 'number',  'role': 'value'},
		'tIO_sec': {'type': 'number',  'role': 'value'},
		'ms':      {'type': 'number',  'role': 'value'}
	},
	'fsSize': [
		{
			'fs':    {'type': 'string',  'role': 'text'},
			'type':  {'type': 'string',  'role': 'text'},
			'size':  {'type': 'number',  'role': 'value'},
			'used':  {'type': 'number',  'role': 'value'},
			'use':   {'type': 'number',  'role': 'value'},
			'mount': {'type': 'string',  'role': 'text'}
		}
	],
	'fsOpenFiles': {
		'max':          {'type': 'number',  'role': 'value'},
		'allocated':    {'type': 'number',  'role': 'value'},
		'available':    {'type': 'number',  'role': 'value'}
	},
	'fsStats': {
		'rx':     {'type': 'number',  'role': 'value'},
		'wx':     {'type': 'number',  'role': 'value'},
		'tx':     {'type': 'number',  'role': 'value'},
		'rx_sec': {'type': 'number',  'role': 'value'},
		'wx_sec': {'type': 'number',  'role': 'value'},
		'tx_sec': {'type': 'number',  'role': 'value'},
		'ms':     {'type': 'number',  'role': 'value'}
	},
	'networkInterfaces': [
		{
			'iface':            {'type': 'string',  'role': 'text'},
			'ifaceName':        {'type': 'string',  'role': 'text'},
			'ip4':              {'type': 'string',  'role': 'text'},
			'ip6':              {'type': 'string',  'role': 'text'},
			'mac':              {'type': 'string',  'role': 'text'},
			'internal':         {'type': 'boolean', 'role': 'indicator'},
			'operstate':        {'type': 'string',  'role': 'text'},
			'type':             {'type': 'string',  'role': 'text'},
			'duplex':           {'type': 'string',  'role': 'text'},
			'mtu':              {'type': 'string',  'role': 'text'},
			'speed':            {'type': 'string',  'role': 'text'},
			'carrierChanges':   {'type': 'string',  'role': 'text'}
		}
	],
	'networkInterfaceDefault':  {'type': 'string',  'role': 'text'},
	'networkStats': [
		{
			'iface':     {'type': 'string',  'role': 'text'},
			'operstate': {'type': 'string',  'role': 'text'},
			'rx_bytes':  {'type': 'number',  'role': 'value'},
			'rx_errors': {'type': 'number',  'role': 'value'},
			'rx_dropped':{'type': 'number',  'role': 'value'},
			'tx_bytes':  {'type': 'number',  'role': 'value'},
			'tx_errors': {'type': 'number',  'role': 'value'},
			'tx_dropped':{'type': 'number',  'role': 'value'},
			'rx_sec':    {'type': 'number',  'role': 'value'},
			'tx_sec':    {'type': 'number',  'role': 'value'},
			'ms':        {'type': 'number',  'role': 'value'}
		}
	],
	'networkConnections': {'type': 'string',  'role': 'html'},
	// details see @Interval0.js
	'inetLatency': {'type': 'number',  'role': 'value'},
	// 'inetChecksite': {
	//     'url':    {'type': 'string',  'role': 'text'},
	//     'ok':     {'type': 'string',  'role': 'text'},
	//     'status': {'type': 'string',  'role': 'text'},
	//     'ms':     {'type': 'number',  'role': 'value'}
	// },
	'currentLoad': {
		'avgload':            {'type': 'number',  'role': 'value'},
		'currentload':        {'type': 'number',  'role': 'value'},
		'currentload_user':   {'type': 'number',  'role': 'value'},
		'currentload_system': {'type': 'number',  'role': 'value'},
		'currentload_nice':   {'type': 'number',  'role': 'value'},
		'currentload_idle':   {'type': 'number',  'role': 'value'},
		'currentload_irq':    {'type': 'number',  'role': 'value'},
		'cpus': [
			{
				'load':        {'type': 'number',  'role': 'value'},
				'load_user':   {'type': 'number',  'role': 'value'},
				'load_system': {'type': 'number',  'role': 'value'},
				'load_nice':   {'type': 'number',  'role': 'value'},
				'load_idle':   {'type': 'number',  'role': 'value'},
				'load_irq':    {'type': 'number',  'role': 'value'}
			}
		]
	},
	'fullLoad': {'type': 'number',  'role': 'value'},
	'processes': {
		'all':      {'type': 'number',  'role': 'value'},
		'running':  {'type': 'number',  'role': 'value'},
		'blocked':  {'type': 'number',  'role': 'value'},
		'sleeping': {'type': 'number',  'role': 'value'},
		'unknown':  {'type': 'number',  'role': 'value'},
		'list':     {'type': 'string',  'role': 'html'}
		// details see @Interval0.js
	},
	'dockerInfo': {
		'id':                 {'type': 'string',  'role': 'text'},
		'containers':         {'type': 'number',  'role': 'value'},
		'containersRunning':  {'type': 'number',  'role': 'value'},
		'containersPaused':   {'type': 'number',  'role': 'value'},
		'containersStopped':  {'type': 'number',  'role': 'value'},
		'images':             {'type': 'number',  'role': 'value'},
		'driver':             {'type': 'string',  'role': 'text'},
		'memoryLimit':        {'type': 'boolean', 'role': 'indicator'},
		'swapLimit':          {'type': 'boolean', 'role': 'indicator'},
		'kernelMemory':       {'type': 'boolean', 'role': 'indicator'},
		'cpuCfsPeriod':       {'type': 'boolean', 'role': 'indicator'},
		'cpuCfsQuota':        {'type': 'boolean', 'role': 'indicator'},
		'cpuShares':          {'type': 'boolean', 'role': 'indicator'},
		'cpuSet':             {'type': 'boolean', 'role': 'indicator'},
		'ipv4Forwarding':     {'type': 'boolean', 'role': 'indicator'},
		'bridgeNfIptables':   {'type': 'boolean', 'role': 'indicator'},
		'bridgeNfIp6tables':  {'type': 'boolean', 'role': 'indicator'},
		'debug':              {'type': 'boolean', 'role': 'indicator'},
		'nfd':                {'type': 'number', 'role': 'value'},
		'oomKillDisable':     {'type': 'boolean', 'role': 'indicator'},
		'ngoroutines':        {'type': 'number', 'role': 'value'},
		'systemTime':         {'type': 'number', 'role': 'date'},
		'loggingDriver':      {'type': 'string', 'role': 'text'},
		'cgroupDriver':       {'type': 'string', 'role': 'text'},
		'nEventsListener':    {'type': 'number', 'role': 'value'},
		'kernelVersion':      {'type': 'string', 'role': 'text'},
		'operatingSystem':    {'type': 'string', 'role': 'text'},
		'osType':             {'type': 'string', 'role': 'text'},
		'architecture':       {'type': 'string', 'role': 'text'},
		'ncpu':               {'type': 'number', 'role': 'value'},
		'memTotal':           {'type': 'number', 'role': 'value'},
		'dockerRootDir':      {'type': 'string', 'role': 'text'},
		'httpProxy':          {'type': 'string', 'role': 'text'},
		'httpsProxy':         {'type': 'string', 'role': 'text'},
		'noProxy':            {'type': 'string', 'role': 'text'},
		'name':               {'type': 'string', 'role': 'text'},
		'labels':             {'type': 'string', 'role': 'text'}, // is an array!!
		'experimentalBuild':  {'type': 'boolean', 'role': 'indicator'},
		'serverVersion':      {'type': 'string', 'role': 'text'},
		'clusterStore':       {'type': 'string', 'role': 'text'},
		'clusterAdvertise':   {'type': 'string', 'role': 'text'},
		'defaultRuntime':     {'type': 'string', 'role': 'text'},
		'liveRestoreEnabled': {'type': 'boolean', 'role': 'indicator'},
		'isolation':          {'type': 'string', 'role': 'text'},
		'initBinary':         {'type': 'string', 'role': 'text'},
		'productLicense':     {'type': 'string', 'role': 'text'}
	},
	'dockerContainers': {'type': 'string',  'role': 'html'}
	// details see @Interval3.js
};

async function releasePreparation(adapter) {
	adapter.log.debug('release preparation');
}

// internal helper functions
function isStateEntry(entry) {
	if(entry != undefined  && entry.hasOwnProperty('type') && entry.hasOwnProperty('role')) {
		return true;
	}
	return false;
}

function isArrayEntry(entry) {
	if(entry != undefined  && entry.length != undefined) {
		return true;
	}
	return false;
}

async function createDeviceEntry(adapter, parent, name) {
	let id = name;
	if(parent != null && parent !== '') {
		id = parent+'.'+name;
	}
	
	//adapter.log.debug('device name :' + (isNaN(name) ? name : 'i'+name));
	await adapter.extendObjectAsync(id, {
		type: 'device',
		common: {
			name: isNaN(name) ? name : 'i'+name
		},
		native: {}
	});
}

async function createChannelEntry(adapter, parent, name) {
	//adapter.log.debug('channel name :' + (isNaN(name) ? name : 'i'+name));
	await adapter.extendObjectAsync(parent+'.'+name, {
		type: 'channel',
		common: {
			name: isNaN(name) ? name : 'i'+name
		},
		native: {}
	});
}

async function createStateEntry(adapter, parent, newName, newType, newRole) {
	let id;
	if(parent != null && parent !== '')
		id = parent+'.'+newName;
	else 
		id = newName;

	//adapter.log.debug('state name :' + (isNaN(newName) ? newName : 'i'+newName));
	await adapter.extendObjectAsync(id, {
		type: 'state',
		common: {
			name: isNaN(newName) ? newName : 'i'+newName,
			type: newType,
			role: newRole
		},
		native: {}
	});
}

function createEntry(adapter, entry, parent, id) {
	const newId = parent+'.'+id;
	if(isStateEntry(entry)) {
		createStateEntry(adapter, parent, id, entry.type, entry.role);
	} else if(isArrayEntry(entry)) {
		createChannelEntry(adapter, parent, id);
	} else {
		createChannelEntry(adapter, parent, id);
		for (const key in entry) {
			if (entry.hasOwnProperty(key)) {
				const newEntry = entry[key];
				try {
					createEntry(adapter, newEntry, newId, key);
				} catch(err) {
					adapter.log.error('createEntry():'+id, err);
				}
			}
		}
	}
}

async function removeEntry(adapter, id2delete) {
	try {
		let deviceFound = false;
		// delete device bottom up
		const devices = await adapter.getDevicesAsync();
		for (const j in devices) {
			const id = devices[j]._id.split('.').pop();
			if (id && id == id2delete) {
				deviceFound = true;
				const promiseDevicesChildrenDeleted = [];
				// delete channels below device
				const channels = await adapter.getChannelsOfAsync(id2delete);
				if(channels) {
					for (const i in channels) {
						const channelid = channels[i]._id.split('.').pop();
						// delete states below channel
						const states2 = await adapter.getStatesOfAsync(id2delete, channelid);
						if(states2) {
							const promiseChannelsChildrenDeleted = [];
							for (const j in states2) {
								const stateid = states2[j]._id.split('.').pop();
								const id = id2delete + '.' + channelid + '.' + stateid;
								try {
									promiseChannelsChildrenDeleted.push(adapter.delObjectAsync(id));
								} catch (err1) {
									adapter.log.error('error deleting state ' + id + ' from channel ' + channelid + ': ' + err1);
								}
							}
							// wait for deletion of state children
							await Promise.all(promiseChannelsChildrenDeleted);
						}
						// delete channel
						try {
							promiseDevicesChildrenDeleted.push(adapter.deleteChannelAsync(id2delete, channelid));
						} catch (err2) {
							adapter.log.error('error deleting channel ' + channelid + ' from device ' + id2delete + ': ' + err2);
						}
					}
				}
				// delete states below device
				const states = await adapter.getStatesOfAsync(id2delete, id2delete);
				if(states) {
					for (const j in states) {
						const id = id2delete + '.' + states[j]._id.split('.').pop();
						try {
							promiseDevicesChildrenDeleted.push(await adapter.delObjectAsync(id));
						} catch (err3) {
							adapter.log.error('error deleting state ' + id + ' from device ' + id2delete + ': ' + err3);
						}
					}
				}
				// wait for deletion of state and channel children
				await Promise.all(promiseDevicesChildrenDeleted);
				// delete device
				await adapter.deleteDeviceAsync(id2delete);
			}
		}

		// maybe it is a state directly connected to the moma.<instance> like 'cpuflags'
		if (!deviceFound) {
			try {
				// delete state
				const states = await adapter.getStatesOfAsync(adapter.namespace);
				for (const j in states) {
					const id = states[j]._id;
					if (id && id == adapter.namespace + '.' +id2delete) {
						await adapter.delObjectAsync(id);
					}
				}
			} catch(err4) {
				adapter.log.error('error deleting state ' + id2delete + ': ' + err4);
			}
		}
	} catch (err5) {
		adapter.log.error('error deleting objects from ' + id2delete + ': ' + err5);
	}
}

/**
 * Creates all entries needed for the current configuration.
 * Device-Entries that have been deselected will be deleted. 
 */
async function createMomaInstanceEntries(adapter) {
	adapter.log.debug('creating moma instance entries');
	for (const key0 in sysInfo) {
		if (sysInfo.hasOwnProperty(key0)) {
			const level0 = sysInfo[key0];
			// check configuration
			if(adapter.config[key0]) {
				// check for state entry
				if(isStateEntry(level0)) {
					// adapter.log.debug('state: ' + key0 + ' : ' + JSON.stringify(level0));
					await createStateEntry(adapter, '', key0, level0.type, level0.role);
					// check for array entry
				} else if(isArrayEntry(level0)) {
					// adapter.log.debug('array: ' + key0 + ' : ' + JSON.stringify(level0));
					await createDeviceEntry(adapter, null, key0);
					// create on the fly, when data is read first time
					// not a state and not an object entry
				} else {
					// adapter.log.debug('object: ' + key0 + ' : ' + JSON.stringify(level0));
					const parent0 = key0;
					await createDeviceEntry(adapter, null, parent0);
					// adapter.log.debug(JSON.stringify(parent0));
					for (const key1 in level0) {
						// adapter.log.debug(key1);
						if (level0.hasOwnProperty(key1)) {
							await createEntry(adapter, level0[key1], parent0, key1);
						}
					}
				}
			} else {
				// remove entry
				removeEntry(adapter, key0);
			}
		}
	}
}

async function createMetaState(adapter, id, varRole, varType) {
	const state = {
		_id:  id,
		type: 'state',
		common: {
			name:  id.split('.').pop(),
			role:  varRole,
			type:  varType,
			read:  true,
			write: false
		},
		native: {}
	};
	await adapter.extendForeignObjectAsync(state._id, state);
}

/**
 * Creates all meta entries.
 */
async function createMomaMetaEntries(adapter) {
	adapter.log.debug('creating moma meta entries');
	// needed definitions
	const defs = require(__dirname + '/definitions');
 
	await createMetaState(adapter, defs.hostNeedsAttention, 'indicator', 'boolean');
	await adapter.setForeignStateChangedAsync(defs.hostNeedsAttention, {val: false, ack: true});
	await createMetaState(adapter, defs.hostNeedsAttentionList, 'text', 'string');

	await createMetaState(adapter, defs.hostNeedsUpdate, 'indicator', 'boolean');
	await adapter.setForeignStateChangedAsync(defs.hostNeedsUpdate, {val: false, ack: true});
	await createMetaState(adapter, defs.hostNeedsUpdateList, 'text', 'string');

	await createMetaState(adapter, defs.hostNeedsReboot, 'indicator', 'boolean');
	await adapter.setForeignStateChangedAsync(defs.hostNeedsReboot, {val: false, ack: true});
	await createMetaState(adapter, defs.hostNeedsRebootList, 'text', 'string');

	await createMetaState(adapter, defs.deviceNeedsBatteryChange, 'indicator', 'boolean');
	await adapter.setForeignStateChangedAsync(defs.deviceNeedsBatteryChange, {val: false, ack: true});
	await createMetaState(adapter, defs.deviceNeedsBatteryChangeList, 'text', 'string');

	// create entry into list of hosts
	const channel = {
		_id:  defs.hostListEntry,
		type: 'channel',
		common: {
			name:  'hostname'
		},
		native: {}
	};
	await adapter.extendForeignObjectAsync(channel._id, channel);

	await createMetaState(adapter, defs.hostEntryInstance, 'text', 'string');

	await createMetaState(adapter, defs.hostEntryAlive, 'indicator', 'boolean');
	await adapter.setForeignStateChangedAsync(defs.hostEntryAlive, {val: false, ack: true, expire: 10000});

	await createMetaState(adapter, defs.hostEntryNeedsAttention, 'indicator', 'boolean');
	await adapter.setForeignStateChangedAsync(defs.hostEntryNeedsAttention, {val: false, ack: true});

	await createMetaState(adapter, defs.hostEntryHasUpdates, 'value', 'number');
	await adapter.setStateAsync(defs.hostEntryHasUpdates, {val: 0, ack: true});
	await createMetaState(adapter, defs.hostEntryListOfUpdates, 'text', 'string');
	await adapter.setStateAsync(defs.hostEntryListOfUpdates, {val: '', ack: true});
	await createMetaState(adapter, defs.hostEntryLastUpdate, 'date', 'number');

	await createMetaState(adapter, defs.hostEntryNeedsReboot, 'indicator', 'boolean');
	await adapter.setForeignStateChangedAsync(defs.hostEntryNeedsReboot, {val: false, ack: true});

	await createMetaState(adapter, defs.hostEntryListOfAdapterUpdates, 'text', 'string');
	await adapter.setForeignStateChangedAsync(defs.hostEntryListOfAdapterUpdates, {val: '', ack: true});
	await createMetaState(adapter, defs.hostEntryControllerUpdate, 'text', 'string');
	await adapter.setForeignStateChangedAsync(defs.hostEntryControllerUpdate, {val: '', ack: true});

	// set the instance in moma.meta.<hostname>.instance
	await adapter.setForeignStateChangedAsync(defs.hostEntryInstance, {val: adapter.namespace, ack: true});
	await adapter.setForeignStateChangedAsync(defs.hostEntryNeedsAttention, {val: false, ack: true});
}

module.exports.init = async (adapter) => {
	// cleanup old stuff
	await releasePreparation(adapter);
	// create Entries moma.meta.<hostname>.*
	await createMomaMetaEntries(adapter);
	// create Entries moma.<instanceId>.*
	await createMomaInstanceEntries(adapter);
	adapter.log.debug('init done');
};

/**
 * Creates all entries for an array below a parent device or channel 
 */
module.exports.createArrayEntry = (adapter, parent, id) => {
	try {
		const comp = parent.split('.');
		if(comp.length == 1)
			createEntry(adapter, sysInfo[comp[0]][0], parent, id);
		else if(comp.length == 2)
			createEntry(adapter, sysInfo[comp[0]][comp[1]][0], parent, id);
		else if(comp.length == 3)
			createEntry(adapter, sysInfo[comp[0]][comp[1]][comp[2]][0], parent, id);
		else {
			adapter.log.error('length in createArrayEntry() parent: ' + parent + ' id: ' + id);
			return;
		}
	} catch(err) {
		adapter.log.error('createArrayEntry() parent: ' + parent + ' id: ' + id);
	}
};

// end of helper functions