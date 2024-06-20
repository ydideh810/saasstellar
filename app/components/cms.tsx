import React from 'react'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'



    return (
        <div className='mx-5'>
            <p className='mb-8 text-center text-sm font-medium text-muted-foreground'>
                OVER 30 MODELS TO CHOOSE FROM
            </p>
            <div className='mx-auto flex flex-wrap items-center justify-center gap-8 fill-foreground lg:gap-x-14'>
                {cms.map((item) => (
                    <React.Fragment key={item.name}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger
                                    aria-label={item.name}
                                    className='cursor-default'
                                >
                                    {item.component}
                                </TooltipTrigger>
                                <TooltipContent side='bottom'>
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Cms
