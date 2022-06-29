export const tunnelEnvironments =
{
	"mongo":
	{
		"mothercare":
		{
			username: 'ubuntu',
			privateKey: require('fs').readFileSync('./goldilocks-1.pem'),
			host: '3.6.218.10',
			port: 22,
			dstPort: 27017, 
			localHost: '127.0.0.1',
			localPort: 27017
		}
	}
}