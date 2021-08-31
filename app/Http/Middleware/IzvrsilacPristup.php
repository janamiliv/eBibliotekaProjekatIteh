<?php

namespace EBiblioteka\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class IzvrsilacPristup
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!is_null(Auth::user())) {
            if (Auth::user()->imaUlogu('izvrsilac'))
            return $next($request);
        }
        return redirect('home');

        
        
        
    }
}
