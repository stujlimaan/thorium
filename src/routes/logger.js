let url='www.google.com'

function log(msg)
{
    console.log(msg)
}
module.exports.endpoint=url//making url public
module.exports.printMsg=log//making function public