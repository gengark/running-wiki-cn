import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

yargs(hideBin(process.argv))
    .scriptName('running-wiki')
    .usage('$0 [options] <query>')
    .alias({
        v: 'version',
        h: 'help',
    })
    .parse();
